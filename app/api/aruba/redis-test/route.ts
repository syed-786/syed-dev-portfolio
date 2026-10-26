import { Redis } from "@upstash/redis";

export async function GET() {
  try {
    const redis = Redis.fromEnv();

    const result = await redis.ping();

    return Response.json({
      success: result === "PONG",
      message: "Upstash Redis connection successful",
    });
  } catch (error) {
    console.error("Redis connection failed:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to connect to Upstash Redis",
      },
      { status: 500 },
    );
  }
}
