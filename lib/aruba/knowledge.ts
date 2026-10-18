import { projects } from "@/lib/data";

const profile = {
  name: "Syed Adeeb Ahmad",
  title: "Senior Full Stack Developer",
  experience: "7+ years of professional software development experience",
  location: "Noida, India",
  availability:
    "Open to suitable job opportunities and freelance work in India & abroad, spcecifically in UAE, USA & Canada.",

  portfolio: "https://syed-dev-portfolios.vercel.app/",

  links: {
    portfolio: "https://syed-dev-portfolios.vercel.app/",
    linkedin: "https://www.linkedin.com/in/s-a-ahmad",
    github: "https://github.com/syed-786",
  },

  professionalSummary: `
    A senior software developer with strong frontend and backend engineering experience,
    particularly in React.js, Next.js,Node.js, Express.js, JavaScript, and TypeScript.
    Experienced in building enterprise applications, reusable UI
    components, state management solutions, API integrations,
    and responsive user interfaces.

    Has worked across e-commerce, fintech, and EdTech domains.
    Also develops backend skills with Node.js, Express.js,
    and MongoDB.
  `,

  workExperience: [
    {
      type: "work",
      title: "Associate Staff Engineer",
      company: "Nagarro Software PVT.LTD.",
      period: "May 2022 - December 2025",
      location: "Noida, India",
      highlights: `Built & maintained multiple Enterprise‑scale Fintech and E‑commerce Projects.
       Collaborated with design, backend, QA, and product teams in Agile cycles to ship high‑quality releases, 
       while mentoring junior developers and driving component standardization and workflow best practices.
       Leveraged AI‑assisted tools to accelerate debugging, refactoring, and overall development productivity. 
       Focused on Performace Optmization & Security,
      `,
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "JS",
        "REST API",
        "GraphQL",
        "MUI",
        "Tailwind ",
        "Docker",
        "Claude Code",
        "ChatGPT Codex",
        "React Query",
      ],
    },
    {
      type: "work",
      title: "Software Engineer",
      company: "Incedo INC.",
      period: "August 2021 - April 2022",
      location: "Gurgaon, India",
      highlights: `Delivered reusable components that accelerated development speed & improved maintainability across projects.
    Enhanced user experience by building responsive interfaces with dynamic theming, ensuring consistency across devices and screen sizes.
    `,
      technologies: [
        "React.js",
        "Next.js",
        "Node.js",
        "Material UI",
        "Redux",
        "Tailwind CSS",
        "JS",
        "TS",
        "REST API",
        "GraphQL",
      ],
    },
    {
      type: "work",
      title: "Senior Software Engineer",
      company: "Magic Software INC.",
      period: "January 2021 - July 2021",
      location: "Noida, India",
      highlights: `Developed interactive frontend Apps. for an EdTech platform using React.js and modern SCSS.Built reusable UI components and responsive layouts to improve usability across all devices.
    Implemented WCAG accessibility standards & ensured cross‑browser compatibility for all users.`,
      technologies: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Redux",
        "REST API",
        "HTML5",
        "CSS3",
      ],
    },
    {
      type: "work",
      title: "Software Engineer",
      company: "SHL India pvt. ltd.",
      period: "February 2020 - December 2020",
      location: "Gurgaon, India",
      highlights: `Developed responsive modules for an online assessment App using React.js & TypeScript.
    Collaborated with UI/ UX designers to convert wireframes into pixel-perfect, user interfaces.
    Integrated RESTful APIs and managed asynchronous data flows using Axios and Redux.`,
      technologies: [
        "React.js",
        "Next.js",
        "Redux",
        "Axios",
        "JavaScript",
        "TypeScript",
        "REST API",
        "HTML5",
        "CSS3",
      ],
    },
    {
      type: "work",
      title: "Software Developer",
      company: "Vinove Software & Services",
      period: "August 2018 - January 2020",
      location: "Noida, India",
      highlights: `Built dashboards and UI modules for global e‑commerce and event management platforms.
    Built reusable React components to streamline development workflows and improve UI.
    Implemented internationalization features to support multi-region user experiences.`,
      technologies: [
        "React.js",
        "Redux",
        "Axios",
        "JavaScript",
        "TypeScript",
        "REST API",
        "HTML5",
        "CSS3",
      ],
    },
    {
      type: "education",
      title: "PG-Diploma in Advanced Computing (PG-DAC)",
      company: "Centre for Development of Advanced Computing (C-DAC)",
      period: "August 2017 - February 2018",
      location: "Bangalore, India",
      highlights: `Completed a postgraduate diploma focused on advanced computing, software engineering, & emerging technologies. Gained hands‑on experience in building scalable applications and strengthening problem‑solving skills for industry‑ready development.`,
      technologies: [
        "Software Development",
        " Advance Programming",
        "System Design",
      ],
    },
    {
      type: "education",
      title: "B.Tech – Computer Science & Engineering",
      company: "Integral University",
      period: "July 2013 - May 2017",
      location: "Lucknow, India",
      highlights: `Earned a strong foundation in computer science principles, programming, and system design. Developed analytical and technical expertise through coursework and projects, preparing for professional roles in software development.`,
      technologies: [
        "Computer Engineering",
        "Critical Thinking",
        "Problem Solving",
      ],
    },
  ],

  coreSkills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux Toolkit",
    "Zustand",
    "TanStack Query",
    "REST API integration",
    "Microfrontend architecture",
    "HTML",
    "CSS",
    "Material UI",
    "Tailwind CSS",
    "Responsive UI development",
    "Frontend performance optimization",
    "Accessibility and testing fundamentals",
  ],

  backendSkills: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST API development",
    "JWT and authentication concepts",
    "Redis",
  ],

  tools: [
    "Git",
    "GitHub",
    "Postman",
    "Jest",
    "React Testing Library",
    "GitHub Copilot",
    "ChatGPT",
    "Cursor",
    "Claude Code",
    "Docker",
    "Vite",
    "CI/CD pipelines",
  ],

  contactGuidance: `
    Direct visitors to the portfolio's available contact options.
    Do not invent an email address, phone number, or social profile,employment history, dates, achievements, metrics, or qualifications.
    If a detail is unknown, say so and offer a relevant link or contact route.,
    Distinguish professional experience from personal projects and ongoing learning.
  `,
};

const projectKnowledge = projects.map((project) => ({
  title: project.title,
  slug: project.slug,
  description: project.description,
  category: project.category,
  role: project.role,
  techStack: project.techStack,
  overview: project.overview,
  contributions: project.contributions,
  engineeringHighlights: project.engineeringHighlights,
  outcome: project.outcome,
  sections: project.sections,
  url: `${profile.portfolio}projects/${project.slug}`,
}));

export const ARUBA_PORTFOLIO_KNOWLEDGE = JSON.stringify(
  {
    profile,
    projects: projectKnowledge,
  },
  null,
  2,
);
