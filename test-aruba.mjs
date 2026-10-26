const response = await fetch("http://localhost:3000/api/aruba/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    messages: [
      {
        id: "test-user-1",
        role: "user",
        parts: [
          {
            type: "text",
            text: "List name with duration of all the companies Syed has worked for.",
          },
        ],
      },
    ],
  }),
});

console.log("HTTP status:", response.status);

if (!response.ok) {
  console.error(await response.text());
  process.exitCode = 1;
} else {
  const stream = await response.text();

  // Display text-delta events from the AI SDK stream.
  for (const line of stream.split("\n")) {
    if (!line.startsWith("data: ")) continue;

    try {
      const event = JSON.parse(line.slice(6));

      if (event.type === "text-delta") {
        process.stdout.write(event.delta);
      }
    } catch {
      // Ignore non-JSON stream lines.
    }
  }

  console.log("\n");
}
