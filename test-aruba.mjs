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

// {
//   company: "Nagarro Software Pvt. Ltd.",
//   title: "Associate Staff Engineer",
//   period: "May 2022 – December 2025",
//   location: "Noida, India",
//   highlights: [
//     "Worked on enterprise applications using React.js, Next.js, and TypeScript.",
//     "Worked with microfrontend architecture and Redux-based state management.",
//     "Contributed to REST API integration, dynamic form validation, code splitting, and lazy loading.",
//     "Collaborated with cross-functional teams in an Agile environment.",
//   ],
// },
// {
//   company: "Incedo Inc.",
//   title: "Software Engineer",
//   period: "August 2021 – April 2022",
//   location: "Gurgaon, India",
//   highlights: [
//     "Developed reusable React components.",
//     "Worked on responsive forms, theming, and Redux Toolkit.",
//   ],
// },
// {
//   company: "Magic Software",
//   title: "Senior Software Engineer",
//   period: "January 2021 – before August 2021",
//   highlights: ["Worked in software engineering before joining Incedo."],
// },
