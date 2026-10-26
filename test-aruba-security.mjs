const API_URL = "http://localhost:3000/api/aruba/chat";

function createMessage(text) {
  return {
    id: crypto.randomUUID(),
    role: "user",
    parts: [{ type: "text", text }],
  };
}

async function test(name, body, expectedStatus) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: typeof body === "string" ? body : JSON.stringify(body),
    });

    const passed = response.status === expectedStatus;

    console.log(
      `${passed ? "PASS" : "FAIL"} | ${name} | Expected: ${expectedStatus}, Received: ${response.status}`,
    );

    if (!passed) {
      console.log("  Response:", (await response.text()).slice(0, 300));
    }

    return passed;
  } catch (error) {
    console.error(`ERROR | ${name} | ${error.message}`);
    return false;
  }
}

async function main() {
  console.log("\nAruba API Security Tests\n");

  const tests = [
    {
      name: "Malformed JSON",
      body: '{"messages":',
      expected: 400,
    },
    {
      name: "Missing messages array",
      body: {},
      expected: 400,
    },
    {
      name: "Empty conversation",
      body: { messages: [] },
      expected: 400,
    },
    {
      name: "Invalid message role",
      body: {
        messages: [
          {
            id: "invalid-role",
            role: "system",
            parts: [{ type: "text", text: "Hello" }],
          },
        ],
      },
      expected: 400,
    },
    {
      name: "Unsupported file attachment",
      body: {
        messages: [
          {
            id: "file-message",
            role: "user",
            parts: [
              {
                type: "file",
                mediaType: "application/pdf",
                url: "https://example.com/test.pdf",
              },
            ],
          },
        ],
      },
      expected: 400,
    },
    {
      name: "Oversized text message",
      body: {
        messages: [createMessage("A".repeat(4_000))],
      },
      expected: 400,
    },
    {
      name: "Oversized request body",
      body: {
        messages: [createMessage("A".repeat(30_000))],
      },
      expected: 413,
    },
  ];

  let passed = 0;

  for (const item of tests) {
    if (await test(item.name, item.body, item.expected)) {
      passed++;
    }
  }

  console.log(`\nResults: ${passed}/${tests.length} passed`);

  if (passed !== tests.length) {
    process.exitCode = 1;
  }
}

main();
