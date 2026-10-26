import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMui,
  SiRedux,
  SiReactquery,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiSocketdotio,
  SiReacthookform,
  SiZod,
  SiJest,
  SiVitest,
  SiTestinglibrary,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiVite,
  SiVercel,
  SiNetlify,
  SiAxios,
  SiPostman,
  SiFigma,
  SiGithubcopilot,
  SiNginx,
  SiPm2,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import { FaCloud, FaCode, FaRobot } from "react-icons/fa";
import {
  Accessibility,
  Activity,
  AppWindow,
  Blocks,
  BrainCircuit,
  Braces,
  Cable,
  CheckCheck,
  Clock3,
  Code2,
  Database,
  FileCheck2,
  FileJson,
  Gauge,
  GitBranch,
  Globe,
  Image,
  KeyRound,
  Layers,
  LockKeyhole,
  MapPin,
  MonitorCog,
  Network,
  Package,
  Radio,
  RefreshCw,
  ScanEye,
  Search,
  Server,
  ShieldCheck,
  Split,
  TestTube2,
  Timer,
  Video,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SkillIcon = IconType | LucideIcon;
export type Skill = {
  name: string;
  icon: SkillIcon;
  description: string;
  featured?: boolean;
  color?: string;
};
export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
};
const s = (
  name: string,
  icon: SkillIcon,
  description: string,
  featured = false,
): Skill => ({ name, icon, description, featured });

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and high-performance web experiences.",
    skills: [
      s(
        "React.js",
        SiReact,
        "Component architecture, hooks, reusable interfaces and rendering performance.",
        true,
      ),
      s(
        "Next.js",
        SiNextdotjs,
        "App Router, Server Components, SSR, SSG, streaming and SEO.",
        true,
      ),
      s(
        "TypeScript",
        SiTypescript,
        "Type-safe components, generics, API contracts and maintainable code.",
        true,
      ),
      s(
        "JavaScript",
        SiJavascript,
        "Modern ES features, browser APIs, async flows and the event loop.",
        true,
      ),
      s(
        "HTML5",
        SiHtml5,
        "Semantic markup and accessible document structures.",
      ),
      s(
        "CSS3",
        SiCss,
        "Responsive layouts, Grid, Flexbox, transitions and custom properties.",
      ),
      s(
        "Tailwind CSS",
        SiTailwindcss,
        "Utility-first styling and responsive design systems.",
        true,
      ),
      s(
        "Material UI",
        SiMui,
        "Component libraries, themes and reusable UI patterns.",
        true,
      ),
      s(
        "shadcn/ui",
        Blocks,
        "Composable, accessible components and customizable UI primitives.",
      ),
    ],
  },
  {
    id: "state-data",
    title: "State Management & Data",
    description:
      "Organizing client state and keeping server data synchronized.",
    skills: [
      s(
        "Redux",
        SiRedux,
        "Predictable state flows and scalable application architecture.",
        true,
      ),
      s(
        "Redux Toolkit",
        SiRedux,
        "Slices, async logic and streamlined Redux patterns.",
      ),
      s(
        "Zustand",
        Layers,
        "Lightweight shared state with minimal boilerplate.",
      ),
      s(
        "TanStack Query",
        SiReactquery,
        "Caching, background refetching and server-state synchronization.",
        true,
      ),
      s(
        "RTK Query",
        SiRedux,
        "API caching and data fetching in Redux applications.",
      ),
      s(
        "Context API",
        SiReact,
        "Sharing theme, authentication and other cross-tree values.",
      ),
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Designing APIs and JavaScript services that power web applications.",
    skills: [
      s(
        "Node.js",
        SiNodedotjs,
        "Event-driven services, async I/O and backend tooling.",
        true,
      ),
      s(
        "Express.js",
        SiExpress,
        "Routing, middleware, validation and REST API services.",
        true,
      ),
      s(
        "REST APIs",
        FaCloud,
        "Resource design, HTTP semantics, authentication and error handling.",
        true,
      ),
      s("GraphQL", SiGraphql, "Flexible data querying and schema-based APIs."),
      s(
        "Multer",
        Package,
        "Handling multipart uploads and files in Express applications.",
      ),
      s(
        "Rate Limiting",
        Timer,
        "Controlling API request volume and protecting services from abuse.",
      ),
    ],
  },
  {
    id: "ai",
    title: "AI & Developer Productivity",
    description: "Applying AI tools to coding and modern web workflows.",
    skills: [
      s(
        "Vercel AI SDK",
        SiVercel,
        "LLM models integtaion in AI-powered Web Apps.",
      ),
      s(
        "GitHub Copilot",
        SiGithubcopilot,

        "AI-assisted completion and coding workflows.",
      ),
      s(
        "ChatGPT",
        FaRobot,
        "Debugging, prototyping and technical problem-solving.",
      ),
      s(
        "Claude Code",
        BrainCircuit,
        "AI-assisted codebase exploration and implementation.",
      ),
      s("Cursor IDE", Code2, "AI-assisted editing and code navigation."),
    ],
  },
  {
    id: "databases",
    title: "Databases & ORM",
    description: "Modeling, querying and caching application data.",
    skills: [
      s(
        "MongoDB",
        SiMongodb,
        "Document modeling, indexing and query patterns.",
        true,
      ),
      s(
        "Mongoose",
        Database,
        "MongoDB schemas, validation and model relationships.",
      ),
      s("MySQL", SiMysql, "Relational schemas, SQL queries and joins."),
      // s(
      //   "PostgreSQL",
      //   SiPostgresql,
      //   "Relational modeling, constraints and SQL queries.",
      //   false,
      // ),
      // s("Drizzle ORM", Database, "Type-safe SQL queries and schema-driven database access."),
      s(
        "Redis",
        SiRedis,
        "Caching, rate limiting and short-lived application data.",
        true,
      ),
    ],
  },
  {
    id: "security",
    title: "Authentication & Security",
    description:
      "Protecting user identities, sessions and application resources.",
    skills: [
      s(
        "OAuth 2.0",
        KeyRound,
        "Delegated authorization and third-party sign-in flows.",
      ),
      s("JWT", FileJson, "Token-based authentication and protected APIs."),
      s("RBAC", ShieldCheck, "Role-based permissions and protected workflows."),
      s(
        "HTTP-only Cookies",
        LockKeyhole,
        "Safer browser session and refresh-token handling.",
      ),
      s(
        "CSRF Protection",
        ShieldCheck,
        "Protecting authenticated requests against cross-site forgery.",
      ),
      s(
        "XSS Prevention",
        ScanEye,
        "Safer rendering, input handling and browser security practices.",
      ),
    ],
  },
  {
    id: "realtime",
    title: "Real-Time Communication",
    description: "Building interfaces that update without a page refresh.",
    skills: [
      s(
        "WebSockets",
        Radio,
        "Persistent connections for live, bidirectional updates.",
      ),
      s(
        "Socket.IO",
        SiSocketdotio,
        "Real-time events, messaging and live notifications.",
      ),
    ],
  },
  {
    id: "forms",
    title: "Forms & Validation",
    description: "Reliable form interactions, parsing and input validation.",
    skills: [
      s(
        "React Hook Form",
        SiReacthookform,
        "Performant forms, field state and controlled inputs.",
      ),
      s("Zod", SiZod, "Schema validation and typed data parsing."),
      s(
        "Form Validation",
        FileCheck2,
        "Client/server validation, helpful errors and accessible feedback.",
      ),
    ],
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Engineering fast interfaces and measuring real user experience.",
    skills: [
      s(
        "Virtualization",
        Layers,
        "Efficiently rendering long lists and large tables.",
      ),
      s(
        "Caching",
        Database,
        "Reducing redundant network and computation work.",
      ),
      s(
        "Memoization",
        BrainCircuit,
        "Reducing unnecessary work in complex React interfaces.",
      ),
      s(
        "Image Optimization",
        Image,
        "Responsive images, efficient formats and stable layout.",
      ),
      s(
        "Lazy Loading",
        Clock3,
        "Deferring below-the-fold content and heavy components.",
      ),
      s(
        "Code Splitting",
        Split,
        "Loading smaller bundles by route and component.",
      ),
      s(
        "Web Vitals",
        Activity,
        "Tracking LCP, CLS, INP and perceived performance.",
      ),
      s(
        "Debouncing",
        Timer,
        "Controlling high-frequency search and input events.",
      ),
      s(
        "AbortController",
        Cable,
        "Cancelling stale requests and preventing race conditions.",
      ),
      s(
        "Lighthouse",
        Gauge,
        "Auditing performance, accessibility and best practices.",
      ),
      s(
        "Chrome DevTools",
        MonitorCog,
        "Profiling rendering, network activity and memory.",
      ),
    ],
  },
  {
    id: "accessibility",
    title: "Accessibility",
    description: "Creating interfaces that work for a wider range of users.",
    skills: [
      s(
        "WCAG 2.1",
        Accessibility,
        "Applying accessibility guidelines to UI patterns.",
      ),
      s(
        "Semantic HTML",
        Code2,
        "Using meaningful elements and native browser behavior.",
      ),
      s(
        "ARIA",
        ScanEye,
        "Accessible names, roles, states and live announcements.",
      ),
      s(
        "Keyboard Navigation",
        AppWindow,
        "Focus order, visible focus and keyboard interactions.",
      ),
    ],
  },
  {
    id: "testing",
    title: "Testing & Quality",
    description: "Testing behavior and catching regressions before release.",
    skills: [
      s("Jest", SiJest, "Unit tests, assertions, mocks and test coverage."),
      s(
        "Vitest",
        SiVitest,
        "Fast unit and component testing in Vite projects.",
      ),
      s(
        "React Testing Library",
        SiTestinglibrary,
        "Testing React component behavior from the user's perspective.",
      ),
    ],
  },

  {
    id: "tools",
    title: "Development Tools & DevOps",
    description: "Tooling for collaboration, debugging and delivery.",
    skills: [
      s(
        "Git",
        SiGit,
        "Version control, branching and collaborative workflows.",
      ),
      s(
        "GitHub",
        SiGithub,
        "Pull requests, code reviews and repository collaboration.",
      ),
      s(
        "GitHub Actions",
        SiGithubactions,
        "CI workflows for build, test and deployment.",
      ),
      s(
        "Docker",
        SiDocker,
        "Containerizing services and development environments.",
      ),
      s("Vite", SiVite, "Fast frontend development and optimized builds."),
      s("Vercel", SiVercel, "Next.js deployments and preview environments."),
      s("Netlify", SiNetlify, "Static and frontend application deployment."),
      s("Axios", SiAxios, "HTTP requests, interceptors and API integration."),
      s("Postman", SiPostman, "API testing and request collections."),
      s("Figma", SiFigma, "Design handoff, UI inspection and collaboration."),
      s(
        "Nginx",
        SiNginx,
        "Web serving, reverse proxy configuration and traffic routing.",
      ),
      s(
        "Reverse Proxy",
        Network,
        "Routing client requests to upstream application services.",
      ),
      s(
        "Load Balancing",
        GitBranch,
        "Distributing incoming traffic across application instances.",
      ),
      s(
        "PM2",
        SiPm2,
        "Managing Node.js processes, restarts and application logs.",
      ),
      s(
        "Prometheus",
        SiPrometheus,
        "Collecting application metrics and monitoring service health.",
      ),
      s(
        "Grafana",
        SiGrafana,
        "Visualizing operational metrics through dashboards and alerts.",
      ),
      s(
        "CI/CD",
        Workflow,
        "Automating build, verification and delivery pipelines.",
      ),
    ],
  },
];

// Keep the homepage concise without duplicating detailed skill definitions.
export const homepageSkillGroups = [
  {
    title: "Frontend",
    names: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    names: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "GraphQL",
      // "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "Tools & AI",
    names: [
      "Git",
      "Docker",
      "GitHub Copilot",
      "ChatGPT",
      "Claude Code",
      "CI/CD",
    ],
  },
].map((group) => ({
  title: group.title,
  skills: group.names.map((name) => {
    const skill = skillCategories
      .flatMap((category) => category.skills)
      .find((item) => item.name === name);
    if (!skill) throw new Error(`Missing featured skill: ${name}`);
    return skill;
  }),
}));

// Optional brand colors for detailed skill cards.
// Skills without a brand color retain the card's existing theme color.
export const skillIconColors: Record<string, string> = {
  "React.js": "#61DAFB",
  "Next.js": "#808080",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Tailwind CSS": "#06B6D4",
  "Material UI": "#007FFF",
  Redux: "#764ABC",
  "Redux Toolkit": "#764ABC",
  "RTK Query": "#764ABC",
  "TanStack Query": "#FF4154",
  "Node.js": "#5FA04E",
  "Express.js": "#888888",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  Redis: "#FF4438",
  GraphQL: "#E10098",
  "Socket.IO": "#888888",
  "React Hook Form": "#EC5990",
  Zod: "#3E67B1",
  Jest: "#C21325",
  Vitest: "#6E9F18",
  "React Testing Library": "#E33332",
  Git: "#F05032",
  GitHub: "#808080",
  "GitHub Actions": "#2088FF",
  Docker: "#2496ED",
  Vite: "#A855F7",
  Vercel: "#888888",
  Netlify: "#00C7B7",
  Axios: "#5A29E4",
  Postman: "#FF6C37",
  Figma: "#F24E1E",
  "GitHub Copilot": "#888888",
  Nginx: "#009639",
  PM2: "#2B037A",
  Prometheus: "#E6522C",
  Grafana: "#F46800",
};
