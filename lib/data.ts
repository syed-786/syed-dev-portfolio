import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe,
  GraduationCap,
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server,
  Smartphone,
  Terminal,
  MessageCircleCheck,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiReactquery,
  SiMui,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiTestinglibrary,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiSocketdotio,
  SiJsonwebtokens,
  SiRedis,
  SiGithubcopilot,
  SiGit,
  SiDocker,
  SiFigma,
  SiGithubactions,
  SiPostman,
  SiVite,
} from "react-icons/si";

import { FaCloud } from "react-icons/fa";

export const stats = [
  { label: "Years of Experience", value: 7 },
  { label: "Projects Completed", value: 20 },
  { label: "Happy Clients", value: 12 },
  { label: "Technologies Explored", value: 20 },
];

export const highlights = [
  { icon: MapPin, text: "Based in Noida, India" },
  { icon: Briefcase, text: "Open to new opportunities & collaboration" },
  { icon: GraduationCap, text: "Computer Science Graduate" },
  { icon: Coffee, text: "Powered by coffee & curiosity" },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "syed.cdac786@gmail.com",
    href: "mailto:syed.cdac786@gmail.com?subject=Job%20Opportunity&body=Hello%20Syed,%20I%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8318831235",
    href: "tel: +918318831235",
  },
  {
    icon: MessageCircleCheck,
    label: "WhatsApp",
    value: "+91 8318831235",
    href: "https://wa.me/918318831235?text=Hello%20Syed,%20I%20would%20like%20to%20connect%20regarding%20a%20job%20Opportunity.",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Delhi NCR, India",
    href: "https://www.google.com/maps/search/?api=1&query=Delhi+NCR+India",
  },
];

export const socialLinksSec = [
  { label: "GitHub", href: "https://www.github.com/syed-786", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/s-a-ahmad",
    icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
  },
  // { label: "Email", href: "mailto:youremail@example.com", icon: FaEnvelope },
];

export const experiences = [
  {
    type: "work",
    title: "Associate Staff Engineer",
    company: "Nagarro Software PVT.LTD.",
    period: "2022 - 2025",
    description: `Built & maintained multiple Enterprise‑scale Fintech and E‑commerce Projects.
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
    period: "2021 - 2022",
    description: `Delivered reusable components that accelerated development speed & improved maintainability across projects.
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
    period: "2021 - 2021",
    description: `Developed interactive frontend Apps. for an EdTech platform using React.js and modern SCSS.Built reusable UI components and responsive layouts to improve usability across all devices.
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
    period: "2020 - 2021",
    description: `Developed responsive modules for an online assessment App using React.js & TypeScript.
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
    period: "2018 - 2020",
    description: `Built dashboards and UI modules for global e‑commerce and event management platforms.
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
    period: "2017 - 2018",
    description: `Completed a postgraduate diploma focused on advanced computing, software engineering, & emerging technologies. Gained hands‑on experience in building scalable applications and strengthening problem‑solving skills for industry‑ready development.`,
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
    period: "2013 - 2017",
    description: `Earned a strong foundation in computer science principles, programming, and system design. Developed analytical and technical expertise through coursework and projects, preparing for professional roles in software development.`,
    technologies: [
      "Computer Engineering",
      "Critical Thinking",
      "Problem Solving",
    ],
  },
];

export const projects = [
  {
    title: "NTCA Secure File Sharing App.",
    description: `      Designed and developed a secure document exchange app with role-based access control (Admin, Sub‑Admin, End User).
Implemented invitation-only signup, account lock feature, location tracking using Geolocation API for enhanced security.
Strengthened application security with HTTP-only cookies, strict origin policies & access/ refresh tokens to prevent XSS
and CSRF attacks.`,
    image: "/images/p4.jpg",
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Material UI",
      "Redux",
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Amway E-Commerce Platform",
    description: `Contributed to the development of a large-scale e-commerce platform using React.js and microfrontend architecture.
Developed reusable and independently deployable UI modules to support scalable frontend delivery.
Worked on frontend performance optimization and responsive user experiences for enterprise-level workflows.`,
    image: "/images/p1.jpg",
    techStack: ["React", "Next.js", "Microfrontend", "Redux", "StoryBook"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "HDFC SKY Online Trading Platform",
    description: `Contributed to development for HDFC SKY, a unified trading platform for stocks, mutual funds, and investment services.
Developed reusable frontend components and integrated business-critical REST APIs.
Improved responsive layouts and user workflows using Material UI and modern frontend development practices.`,
    image: "/images/p3.jpg",
    techStack: ["React.js", "Next.js", "Node.js", "Express"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "One Muthoot Web App",
    description: `Developed admin dashboards and management interfaces for loan products, blogs, and user operations.
Built reusable layouts and implemented dynamic routing using Next.js.
Improved UI consistency and frontend maintainability using Tailwind CSS and component-based architecture.`,
    image: "/images/p5.jpg",
    techStack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Jeeves Admin Control Panel",
    description: `Developed admin tools for managing users, catalogs, files, roles and advertising campaigns.
    `,
    image: "/images/p2.jpg",
    techStack: ["React.js", "JavaScript", "Node.js", "Redux"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Learning Management System",
    description:
      "Educational platform with video streaming, quizzes, progress tracking, & certificates.",
    image: "/images/p6.jpg",
    techStack: ["Next.js", "Tailwind CSS", "Redux", "JavaScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Zustand", icon: SiJavascript },
      { name: "TanStack Query", icon: SiReactquery },
      { name: "Material UI", icon: SiMui },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "React Testing Library", icon: SiTestinglibrary },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      //   { name: "PostgreSQL", icon: SiPostgresql },
      { name: "GraphQL", icon: SiGraphql },
      { name: "REST APIs", icon: FaCloud },
      //   { name: "Socket.io", icon: SiSocketdotio },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    title: "Tools & AI",
    skills: [
      { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "ChatGPT", icon: SiJavascript },
      { name: "Claude Code", icon: Code2 },
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Postman", icon: SiPostman },
      { name: "Vite", icon: SiVite },
      { name: "Figma", icon: SiFigma },
      { name: "CI/CD", icon: SiGithubactions },
    ],
  },
];

// export const skillCategories = [
//   {
//     title: "Frontend",
//     skills: [
//       { name: "JavaScript", icon: Globe },
//       { name: "TypeScript", icon: Terminal },
//       { name: "React.js", icon: Code2 },
//       { name: "Next.js", icon: Globe },
//       { name: "Redux", icon: Terminal },
//       { name: "Zustand", icon: Terminal },
//       { name: "Tanstack Query", icon: Terminal },
//       { name: "Material UI", icon: Terminal },
//       { name: "Tailwind CSS", icon: Palette },
//       { name: "HTML5", icon: Terminal },
//       { name: "CSS3", icon: Terminal },
//       { name: "React Testing", icon: Terminal },
//     ],
//   },
//   {
//     title: "Backend",
//     skills: [
//       { name: "Node.js", icon: Server },
//       { name: "Express", icon: Layers },
//       { name: "MongoDB", icon: Database },
//       { name: "PostgreSQL", icon: Database },
//       { name: "GraphQL", icon: Cpu },
//       { name: "REST APIs", icon: Cloud },
//       { name: "Socket.io", icon: Cpu },
//       { name: "OAuth2", icon: Cpu },
//       { name: "JWT", icon: Cpu },
//       { name: "Redis", icon: Cpu },
//     ],
//   },
//   {
//     title: "AI Tools & Others",
//     skills: [
//       { name: "GitHub Copilot", icon: GitBranch },
//       { name: "ChatGPT", icon: GitBranch },
//       { name: "Claud Code", icon: GitBranch },
//       { name: "Git", icon: GitBranch },
//       { name: "Docker", icon: Server },
//       { name: "AWS", icon: Cloud },
//       { name: "Figma", icon: Palette },
//       { name: "CI/CD", icon: Cpu },
//     ],
//   },
// ];
