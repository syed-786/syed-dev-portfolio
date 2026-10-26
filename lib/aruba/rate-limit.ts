import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import {
  DAILY_REQUEST_LIMIT, PACIFIC_TIME_ZONE, GLOBAL_INPUT_TPM_LIMIT,
} from "./config";

const isDevelopment = process.env.NODE_ENV === "development";
const redis = Redis.fromEnv();

function getPacificDate(date: Date): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: PACIFIC_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function getNextPacificMidnight(now: Date): number {
  const currentDay = getPacificDate(now);

  // Search for the next Pacific calendar day.
  // A 30-minute interval also handles daylight-saving changes.
  for (let minutes = 1; minutes <= 26 * 60; minutes++) {
    const candidate = new Date(now.getTime() + minutes * 60_000);

    if (getPacificDate(candidate) !== currentDay) {
      // Find the exact transition to the next calendar day.
      let low = now.getTime();
      let high = candidate.getTime();

      while (high - low > 1_000) {
        const middle = Math.floor((low + high) / 2);

        if (getPacificDate(new Date(middle)) === currentDay) {
          low = middle;
        } else {
          high = middle;
        }
      }

      return high;
    }
  }

  throw new Error("Unable to calculate Pacific midnight.");
}

const DAILY_QUOTA_SCRIPT = `
  local count = tonumber(redis.call("GET", KEYS[1]) or "0")
  local maxRequests = tonumber(ARGV[1])
  local expiry = tonumber(ARGV[2])

  if count >= maxRequests then
    return {0, count}
  end

  count = redis.call("INCR", KEYS[1])

  if count == 1 then
    redis.call("PEXPIREAT", KEYS[1], expiry)
  end

  return {1, count}
`;

export async function checkDailyQuota() {
  const now = new Date();
  const pacificDate = getPacificDate(now);
  const resetAt = getNextPacificMidnight(now);

  const key = `aruba:global:daily:v2:${pacificDate}`;

  const result = (await redis.eval(
    DAILY_QUOTA_SCRIPT,
    [key],
    [DAILY_REQUEST_LIMIT, resetAt],
  )) as [number, number];

  const [allowed, used] = result;

  return {
    success: allowed === 1,
    remaining: Math.max(0, DAILY_REQUEST_LIMIT - used),
    reset: resetAt,
  };
}

const GLOBAL_TPM_WINDOW_MS = 60_000;

const TPM_RESERVATION_SCRIPT = `
  local current = tonumber(redis.call("GET", KEYS[1]) or "0")
  local limit = tonumber(ARGV[1])
  local reserve = tonumber(ARGV[2])
  local expiry = tonumber(ARGV[3])

  if current + reserve > limit then
    return {0, current}
  end

  local updated = redis.call("INCRBY", KEYS[1], reserve)

  if current == 0 then
    redis.call("PEXPIREAT", KEYS[1], expiry)
  end

  return {1, updated}
`;

export async function reserveInputTokens(reservedTokens: number) {
  const now = Date.now();
  const windowStart =
    Math.floor(now / GLOBAL_TPM_WINDOW_MS) * GLOBAL_TPM_WINDOW_MS;

  const resetAt = windowStart + GLOBAL_TPM_WINDOW_MS;

  const key = `aruba:global:input-tpm:v1:${windowStart}`;

  const result = (await redis.eval(
    TPM_RESERVATION_SCRIPT,
    [key],
    [GLOBAL_INPUT_TPM_LIMIT, reservedTokens, resetAt],
  )) as [number, number];

  const [allowed, used] = result;

  return {
    success: allowed === 1,
    remaining: Math.max(0, GLOBAL_INPUT_TPM_LIMIT - used),
    reset: resetAt,
  };
}

export const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(isDevelopment ? 100 : 15, "5 m"),
  prefix: isDevelopment ? "aruba:chat:dev" : "aruba:chat:prod",
});

export const globalRpmLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1 m"),
  prefix: "aruba:global:rpm:v1",
  ephemeralCache: false,
});

