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

export const projectss = [
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
      "Educational platform with quizzes, progress tracking, & certificates.",
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

export type CaseStudySection = {
  title: string;
  description: string;
  bullets?: string[];
};

export type PortfolioProject = {
  slug: string;
  title: string;
  Stitle?: string;
  shortTitle: string;
  description: string;
  image: string;
  techStack: string[];
  category: string;
  role: string;
  overview: string;
  contributions: string[];
  engineeringHighlights: string[];
  outcome: string;
  sections: CaseStudySection[];
  demoUrl?: string;
  githubUrl?: string;
};

export const projects: PortfolioProject[] = [
  {
    slug: "ntca-secure-file-sharing",
    title: "NTCA — Secure File Sharing Platform",
    Stitle: "NTCA — Secure File Sharing App",
    shortTitle: "NTCA",
    category: "Enterprise Security",
    description:
      "A secure document-sharing platform featuring role-based access, invitation-only onboarding, authentication controls, and responsive interfaces for managing large document collections.",
    image: "/images/p4.jpg",
    techStack: [
      "React.js",
      "TS",
      "Node.js",
      "Redux",
      "Material UI",
      "MongoDB",
      "REST APIs",
    ],
    role: "Frontend-focused full-stack development",
    demoUrl: "https://syed-dev-portfolios.vercel.app/coming-soon",
    githubUrl: "https://github.com/syed-786", // Add your repository URL when ready
    overview:
      "The platform was designed to make document exchange more controlled and manageable for enterprise users. It combines invitation-based registration, role-aware access, account security controls, and document management workflows. The engineering challenge was to keep the experience straightforward while respecting the access rules and security requirements associated with sensitive information.",
    contributions: [
      "Developed reusable React and TypeScript components for document management, user workflows, and administrative screens.",
      "Implemented role-aware interface behavior for Admin, Sub-Admin, and End User workflows.",
      "Integrated REST APIs and connected server responses to predictable client-side state using Redux.",
      "Worked on invitation-based registration and account-level security workflows.",
      "Integrated frontend authentication flows with backend-managed cookies and access/refresh-token mechanisms.",
      "Used React Window to virtualize large document lists and avoid rendering every row simultaneously.",
      "Built dynamic forms with validation and clear feedback for invalid or incomplete input.",
    ],
    engineeringHighlights: [
      "Role-based UI: aligned visible actions and interface states with user permissions.",
      "Rendering efficiency: virtualized long lists to reduce unnecessary DOM work.",
      "Authentication integration: connected frontend workflows to server-managed authentication and session controls.",
      "Component reuse: established reusable patterns for forms, tables, status indicators, and document actions.",
      "Defensive UI behavior: handled API loading, error, empty, and success states.",
    ],
    outcome:
      "Delivered a structured, security-conscious document-management experience with reusable frontend components, permission-aware workflows, and more efficient rendering for large lists.",
    sections: [
      {
        title: "The Challenge",
        description:
          "Document-sharing applications need more than upload and download functionality. Users must see actions relevant to their roles, account workflows must respect access rules, and large document lists must remain usable as data grows.",
        bullets: [
          "Support distinct Admin, Sub-Admin, and End User workflows.",
          "Keep large document collections responsive.",
          "Provide clear feedback for security-sensitive actions and API operations.",
        ],
      },
      {
        title: "Solution & Architecture",
        description:
          "The interface was organized into reusable React components and TypeScript-driven UI patterns. Redux supported shared application state, while REST API integration connected document, user, and administrative workflows to backend services.",
        bullets: [
          "Reusable components for forms, tables, and document actions.",
          "Role-aware rendering based on application permissions.",
          "Centralized state management for connected UI workflows.",
        ],
      },
      {
        title: "Performance & Usability",
        description:
          "React Window was used to virtualize long lists, rendering visible rows instead of mounting every item at once. Reusable form controls and validation patterns helped standardize interactions and improve feedback.",
        bullets: [
          "Virtualized rendering for large collections.",
          "Consistent form validation and error feedback.",
          "Loading, empty, and error states for API-driven screens.",
        ],
      },
      {
        title: "Security Considerations",
        description:
          "The frontend worked with server-managed authentication and authorization rather than treating hidden UI controls as a security boundary. Cookie configuration, token handling, origin checks, and backend permission enforcement need to work together.",
        bullets: [
          "Invitation-based onboarding and role-aware workflows.",
          "HTTP-only cookie-based authentication patterns where supported by the backend.",
          "Server-side authorization to protect sensitive resources.",
        ],
      },
    ],
  },

  {
    slug: "amway-ecommerce-platform",
    title: "Amway — E-Commerce Platform",
    Stitle: "Amway — E-Commerce Platform",
    shortTitle: "Amway",
    category: "E-Commerce",
    description:
      "A large-scale commerce experience built around reusable React interfaces, modular UI architecture, responsive product journeys, and API-driven shopping workflows.",
    image: "/images/p1.jpg",
    techStack: [
      "React.js",
      "TS",
      "JS",
      "CSS",
      "Redux",
      "Microfrontend Architecture",
      "REST APIs",
    ],
    role: "Frontend development within an enterprise engineering team",
    demoUrl: "https://syed-dev-portfolios.vercel.app/coming-soon",
    githubUrl: "https://github.com/syed-786",
    overview:
      "This enterprise e-commerce platform supported customer-facing shopping experiences across a broad application ecosystem. The frontend needed to remain consistent and responsive while allowing teams to work on separate application modules. Reusable components and clearly defined integration boundaries were important for maintaining the experience as features evolved.",
    contributions: [
      "Contributed to customer-facing interfaces using React and TypeScript.",
      "Developed and maintained reusable UI components for consistent interactions and visual patterns.",
      "Worked within a microfrontend architecture that separated application features into manageable modules.",
      "Integrated API-driven data into product and shopping workflows.",
      "Used Redux to coordinate shared state where needed across related UI components.",
      "Implemented responsive layouts and refined component behavior across different screen sizes.",
      "Collaborated with cross-functional team members to align UI behavior with application requirements.",
    ],
    engineeringHighlights: [
      "Modular frontend architecture supporting independent feature development.",
      "Reusable component patterns to reduce duplicated presentation logic.",
      "Shared state coordination for connected shopping workflows.",
      "Responsive behavior across desktop, tablet, and mobile layouts.",
      "Integration discipline to keep component behavior aligned with API contracts.",
    ],
    outcome:
      "Contributed to a maintainable, modular commerce frontend designed to support complex shopping workflows and coordinated development across an enterprise team.",
    sections: [
      {
        title: "The Challenge",
        description:
          "Large e-commerce applications combine product discovery, customer interactions, and shared interface patterns across many screens. As multiple teams develop features in parallel, duplicated components and inconsistent behavior can make the experience harder to maintain.",
        bullets: [
          "Keep shopping interactions consistent across application modules.",
          "Support parallel feature development within an enterprise environment.",
          "Maintain responsive layouts and reusable UI patterns.",
        ],
      },
      {
        title: "Modular Frontend Architecture",
        description:
          "The application used a microfrontend approach to separate parts of the user experience into independently managed modules. React and TypeScript components provided reusable building blocks while preserving the integration requirements of the wider application.",
        bullets: [
          "Modular feature organization.",
          "Reusable React and TypeScript components.",
          "Clearer boundaries between UI responsibilities.",
        ],
      },
      {
        title: "State & API Integration",
        description:
          "Redux supported shared client-side state where multiple components needed to coordinate. API-driven data was connected to relevant views, with attention to consistent rendering and predictable interaction states.",
        bullets: [
          "Shared state for connected components.",
          "API-driven product and shopping interfaces.",
          "Consistent interaction and feedback patterns.",
        ],
      },
      {
        title: "Responsive Customer Experience",
        description:
          "Responsive layouts and reusable styling patterns helped maintain a consistent experience across screen sizes while keeping shopping interfaces straightforward to navigate.",
        bullets: [
          "Responsive page layouts.",
          "Consistent component behavior across viewports.",
          "Maintainable styling and UI patterns.",
        ],
      },
    ],
  },

  {
    slug: "hdfc-sky-trading-platform",
    title: "HDFC SKY — Trading & Investment Platform",
    Stitle: "HDFC SKY Trading & Investment",
    shortTitle: "HDFC SKY",
    category: "Fintech",
    description:
      "A financial-services interface for investment workflows, combining reusable React components, REST API integration, shared state management, and responsive data-heavy screens.",
    image: "/images/p3.jpg",
    techStack: [
      "React.js",
      "JS",
      "Redux",
      "Material UI",
      "REST APIs",
      "Responsive Design",
      "TS",
    ],
    role: "Frontend development",
    demoUrl: "https://syed-dev-portfolios.vercel.app/coming-soon",
    githubUrl: "https://github.com/syed-786",
    overview:
      "The platform brought trading and investment-related workflows into a digital experience where information clarity and predictable interactions were essential. The frontend needed to present API-driven information in a structured way, support connected user journeys, and remain usable across screen sizes.",
    contributions: [
      "Built reusable React components for financial-services screens and shared UI patterns.",
      "Integrated REST APIs to display data required by business-critical workflows.",
      "Used Redux to manage shared application state across connected screens.",
      "Implemented responsive layouts using reusable styling and component patterns.",
      "Worked with Material UI components to build consistent interface elements.",
      "Handled common API states, including loading, error, and data-available scenarios.",
      "Collaborated with team members to align UI behavior with product and business requirements.",
    ],
    engineeringHighlights: [
      "Data-driven interfaces connecting API responses to reusable presentation components.",
      "Shared state coordination using Redux where cross-component state was required.",
      "Reusable UI patterns for common financial workflows.",
      "Responsive information layouts across viewport sizes.",
      "Predictable loading and error behavior for API-dependent screens.",
    ],
    outcome:
      "Contributed reusable frontend functionality and API-integrated screens for a modern trading and investment experience.",
    sections: [
      {
        title: "The Challenge",
        description:
          "Financial interfaces often present dense information alongside actions that users need to understand quickly. Poorly structured layouts, inconsistent states, or unclear API feedback can make those workflows unnecessarily difficult to use.",
        bullets: [
          "Present information in a clear visual hierarchy.",
          "Maintain predictable interactions across connected screens.",
          "Communicate API loading and error states clearly.",
        ],
      },
      {
        title: "Frontend Implementation",
        description:
          "Reusable React components and Material UI patterns provided a consistent foundation for screen development. Redux was used where shared state needed to be coordinated between related parts of the interface.",
        bullets: [
          "Reusable components for financial-service screens.",
          "Consistent interface elements with Material UI.",
          "Shared state management with Redux.",
        ],
      },
      {
        title: "API-Driven Workflows",
        description:
          "REST API integration connected the frontend to business data. Loading, error, and populated states helped keep the interface understandable while requests were in progress or when responses could not be displayed as expected.",
        bullets: [
          "API-connected screens and data presentation.",
          "Loading and error feedback.",
          "Predictable UI state during asynchronous operations.",
        ],
      },
      {
        title: "Responsive Information Design",
        description:
          "Layouts were designed to adapt across viewport sizes while preserving the hierarchy of important information and keeping key interactions accessible.",
        bullets: [
          "Responsive layouts for different screen sizes.",
          "Reusable styling patterns.",
          "Consistent presentation across related workflows.",
        ],
      },
    ],
  },

  {
    slug: "one-muthoot-web-application",
    title: "One Muthoot — Web Application & Admin Panel",
    Stitle: "One Muthoot Web App & Admin",
    shortTitle: "One Muthoot",
    category: "Financial Services",
    description:
      "A web application and admin experience for managing loan-product content, blogs, and operational workflows with reusable Next.js layouts and API-connected screens.",
    image: "/images/p5.jpg",
    techStack: [
      "Next.js",
      "React.js",
      "J",
      "Node.js",
      "Tailwind CSS",
      "Redux",
      "REST APIs",
    ],
    role: "Frontend development with application integration",
    demoUrl: "https://syed-dev-portfolios.vercel.app/coming-soon",
    githubUrl: "https://github.com/syed-786",
    overview:
      "The application included administrative workflows for managing loan products, blog content, and user-related operations. A maintainable page structure was important because the interface contained different types of screens but needed consistent navigation, layout, and state behavior.",
    contributions: [
      "Developed reusable page layouts and UI components using Next.js and React.",
      "Implemented dynamic routing for related application views.",
      "Built responsive interfaces using Tailwind CSS.",
      "Integrated APIs for content and administrative workflows.",
      "Used Redux for shared state where required by related screens.",
      "Organized repeated UI patterns to make future changes easier to implement.",
      "Worked across frontend and backend integration points to support required user flows.",
    ],
    engineeringHighlights: [
      "Reusable layouts for consistent administrative views.",
      "Dynamic routing organized around application resources and workflows.",
      "Tailwind CSS patterns for responsive page structure.",
      "API integration for administrative screens.",
      "Separation of reusable interface elements from page-specific behavior.",
    ],
    outcome:
      "Created a structured and reusable frontend foundation for financial-services content and administrative workflows.",
    sections: [
      {
        title: "The Challenge",
        description:
          "Administrative applications can grow quickly as new content types and operational tasks are introduced. Without reusable layouts and consistent interaction patterns, each new screen can introduce unnecessary duplication.",
        bullets: [
          "Support multiple content and administrative workflows.",
          "Keep navigation and layout behavior consistent.",
          "Reduce repeated implementation across similar pages.",
        ],
      },
      {
        title: "Application Structure",
        description:
          "Next.js routing and reusable React layouts provided a foundation for organizing related screens. Shared components helped standardize navigation and presentation while allowing each page to implement its own workflow.",
        bullets: [
          "Reusable page layouts.",
          "Dynamic routes for related application views.",
          "Separation of shared and page-specific components.",
        ],
      },
      {
        title: "Styling & Responsiveness",
        description:
          "Tailwind CSS supported consistent spacing, responsive breakpoints, and reusable layout patterns, making it easier to maintain a coherent interface across screen sizes.",
        bullets: [
          "Utility-based styling patterns.",
          "Responsive layouts.",
          "Consistent spacing and visual hierarchy.",
        ],
      },
      {
        title: "Data Integration",
        description:
          "API-connected screens supported content and administrative tasks. Shared state was used where needed, while page-specific behavior remained organized to improve maintainability.",
        bullets: [
          "API-driven content and administrative screens.",
          "Shared state where appropriate.",
          "Reusable patterns for data-dependent UI.",
        ],
      },
    ],
  },

  {
    slug: "jeeves-admin-control-panel",
    title: "Jeeves — Enterprise Admin Control Panel",
    Stitle: "Jeeves — Enterprise Admin Panel",
    shortTitle: "Jeeves",
    category: "Enterprise Applications",
    description:
      "A centralized administration interface for user management, catalogs, files, roles, and advertising campaigns, built with reusable React components and backend API integration.",
    image: "/images/p2.jpg",
    techStack: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Redux",
      "Material UI",
      "REST APIs",
    ],
    role: "Frontend development and cross-team integration",
    demoUrl: "https://syed-dev-portfolios.vercel.app/coming-soon",
    githubUrl: "https://github.com/syed-786",
    overview:
      "The control panel brought multiple administrative responsibilities into a unified interface. Users needed structured access to different operational areas, while the application had to accommodate API-driven data, reusable forms, and consistent navigation across a range of management workflows.",
    contributions: [
      "Developed reusable React and TypeScript components for administrative screens.",
      "Implemented UI workflows for users, catalogs, files, roles, and advertising campaigns.",
      "Used Redux to manage shared application state where appropriate.",
      "Integrated backend APIs for data retrieval and administrative actions.",
      "Built responsive layouts and consistent form patterns using Material UI.",
      "Collaborated with backend and mobile teams to coordinate API integration and analytics-related data flows.",
      "Improved consistency by reusing common components and interaction patterns across the control panel.",
    ],
    engineeringHighlights: [
      "Organized multiple operational areas within a consistent UI.",
      "Reusable data interfaces for forms, lists, tables, and action controls.",
      "API integration with clear request-state feedback.",
      "Redux state management where shared state was needed.",
      "Cross-team coordination around backend and mobile integration requirements.",
    ],
    outcome:
      "Contributed a reusable, API-connected administration experience that brought multiple operational workflows into a consistent interface.",
    sections: [
      {
        title: "The Challenge",
        description:
          "Administrative users often move between unrelated tasks such as managing users, updating catalog information, reviewing files, and configuring campaigns. A fragmented interface can slow these workflows and make common actions inconsistent.",
        bullets: [
          "Support different operational workflows in one interface.",
          "Maintain consistent interactions across management screens.",
          "Keep API-driven data and actions understandable.",
        ],
      },
      {
        title: "Unified UI Patterns",
        description:
          "Reusable React components helped establish consistent patterns for lists, forms, status information, and actions. TypeScript improved the clarity of component contracts and data structures across the frontend.",
        bullets: [
          "Reusable components for common administrative patterns.",
          "Typed component props and data structures.",
          "Consistent forms and interaction states.",
        ],
      },
      {
        title: "Backend Integration",
        description:
          "REST API integration connected administrative actions to backend services. The UI represented request states and provided feedback to help users understand whether operations were loading, completed, or had encountered an error.",
        bullets: [
          "API-connected administrative operations.",
          "Loading, success, and error feedback.",
          "Predictable state updates after user actions.",
        ],
      },
      {
        title: "Cross-Functional Delivery",
        description:
          "Coordination with backend and mobile teams helped align API expectations and data flows. Shared conventions reduced ambiguity when connecting the interface to services maintained by different parts of the engineering team.",
        bullets: [
          "Coordination around API contracts.",
          "Collaboration across frontend, backend, and mobile teams.",
          "Consistent integration behavior across workflows.",
        ],
      },
    ],
  },

  {
    slug: "chicos-ecommerce-platform",
    title: "Chico’s — E-Commerce Storefront Modernization",
    Stitle: "Chico’s - E-Commerce Storefront",
    shortTitle: "Chico’s",
    category: "E-Commerce",
    description:
      "A storefront modernization initiative migrating legacy Knockout.js interfaces toward a reusable React architecture using Oracle Commerce Cloud and the Oracle Storefront Framework.",
    image: "/images/p6.jpg",
    techStack: [
      "React.js",
      "Redux",
      "JavaScript",
      "CSS",
      "Oracle Commerce Cloud",
      "Oracle Storefront",
    ],
    role: "Frontend development during storefront modernization",
    demoUrl: "https://syed-dev-portfolios.vercel.app/coming-soon",
    githubUrl: "https://github.com/syed-786",
    overview:
      "The project focused on modernizing parts of an established e-commerce storefront by moving from legacy Knockout.js UI patterns toward React-based components. The migration needed to preserve familiar shopping experiences while introducing a more component-oriented frontend structure and maintaining visual consistency across devices.",
    contributions: [
      "Contributed to migrating legacy Knockout.js interfaces to React-based UI components.",
      "Worked with Oracle Commerce Cloud and the Oracle Storefront Framework.",
      "Developed reusable storefront components for customer-facing pages.",
      "Implemented responsive layouts and refined visual details across breakpoints.",
      "Used Redux for application state where required by storefront workflows.",
      "Focused on cross-browser consistency and pixel-conscious UI implementation.",
      "Worked within the existing commerce architecture to support the transition without unnecessarily disrupting established behavior.",
    ],
    engineeringHighlights: [
      "Legacy modernization by replacing selected UI patterns with React components.",
      "Incremental migration within an existing commerce system.",
      "Reusable storefront UI for improved maintainability.",
      "Responsive implementation across desktop and mobile viewports.",
      "Integration with Oracle Commerce Cloud and its storefront framework.",
    ],
    outcome:
      "Contributed to a more component-oriented storefront implementation while preserving established commerce workflows and responsive presentation.",
    sections: [
      {
        title: "The Challenge",
        description:
          "Modernizing a live e-commerce storefront requires balancing technical improvements with the need to preserve established user journeys. Legacy UI behavior, platform constraints, and visual expectations all need to be considered during migration.",
        bullets: [
          "Modernize selected legacy UI functionality.",
          "Preserve established shopping interactions.",
          "Maintain visual consistency across devices and browsers.",
        ],
      },
      {
        title: "Migration Approach",
        description:
          "The work involved moving selected interface functionality from Knockout.js patterns toward React components within the Oracle Storefront Framework. Reusable components helped establish clearer boundaries for UI behavior and made repeated patterns easier to maintain.",
        bullets: [
          "React-based replacements for selected legacy interfaces.",
          "Reusable components within the existing storefront framework.",
          "Integration with established commerce functionality.",
        ],
      },
      {
        title: "Visual Consistency",
        description:
          "Responsive layouts and attention to spacing, typography, and component alignment helped preserve the storefront's visual consistency across screen sizes and browsers.",
        bullets: [
          "Responsive layouts and breakpoints.",
          "Attention to component alignment and spacing.",
          "Cross-browser UI consistency.",
        ],
      },
      {
        title: "Maintainability",
        description:
          "The component-based approach supported clearer separation of interface elements and made repeated storefront patterns easier to reason about as the implementation evolved.",
        bullets: [
          "Reusable UI building blocks.",
          "Clearer separation of presentation concerns.",
          "More consistent patterns for future interface changes.",
        ],
      },
    ],
  },

  {
    slug: "personal-developer-portfolio",
    title: "Personal Developer Portfolio",
    Stitle: "Personal Developer Portfolio",
    shortTitle: "Portfolio",
    category: "Personal Project",
    description:
      "A responsive developer portfolio featuring animated sections, a starry dark theme, light/dark mode, technical case studies, SEO metadata, and reusable Next.js components.",
    image: "/images/portfolio.png",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "next-themes",
      "React TSParticles",
      "Vercel Analytics",
    ],
    role: "Personal project — design and implementation",
    demoUrl: "https://syed-dev-portfolios.vercel.app/",
    githubUrl: "https://github.com/syed-786/syed-dev-portfolio", // Add your repository URL when ready
    overview:
      "This portfolio was built to present professional experience, selected projects, technical skills, and testimonials in a polished, interactive experience. Beyond the visual design, it demonstrates reusable component architecture, responsive styling, theme management, and structured project content.",
    contributions: [
      "Designed and developed the portfolio using Next.js, React, and TypeScript.",
      "Built reusable components for navigation, project cards, experience, skills, testimonials, and page layout.",
      "Implemented light and dark themes using next-themes, including a starry animated hero experience.",
      "Created dedicated project case-study routes using a shared page template and structured project data.",
      "Added responsive layouts and animations to support a polished experience across devices.",
      "Configured page metadata and SEO foundations, including canonical URLs and social-sharing metadata.",
      "Integrated Vercel Analytics and a contact flow backed by a Next.js API route.",
    ],
    engineeringHighlights: [
      "Reusable case-study architecture: project pages share one template while using project-specific data.",
      "Dynamic routing: dedicated pages are generated from project slugs.",
      "Theme management: centralized light/dark mode behavior with next-themes.",
      "Responsive design: layouts adapt to mobile, tablet, and desktop viewports.",
      "SEO foundations: structured metadata, canonical URLs, and social-sharing metadata.",
      "Interactive visuals: animations and theme effects add personality to the user experience.",
    ],
    outcome:
      "A deployed portfolio that combines professional presentation with a maintainable component structure and reusable case-study pages.",
    sections: [
      {
        title: "The Goal",
        description:
          "The goal was to create more than a static résumé page: a portfolio that communicates engineering experience, demonstrates attention to detail, and gives each selected project enough context for a recruiter or engineering lead to understand the work.",
        bullets: [
          "Present professional experience and selected projects.",
          "Provide dedicated pages with deeper technical context.",
          "Create a polished and responsive browsing experience.",
        ],
      },
      {
        title: "Design System & Theming",
        description:
          "Reusable components and Tailwind CSS provide a consistent styling foundation. next-themes manages light and dark mode, while the starry hero and subtle animations add visual personality without changing the underlying information architecture.",
        bullets: [
          "Shared components and styling patterns.",
          "Light/dark mode with next-themes.",
          "Responsive layouts and animated visual elements.",
        ],
      },
      {
        title: "Reusable Case Studies",
        description:
          "Each project is represented by structured data and a dedicated route. A shared case-study component renders the overview, technical highlights, contributions, and project sections, reducing duplicated page code and making future content updates simpler.",
        bullets: [
          "Dynamic project routes driven by slugs.",
          "A reusable case-study page template.",
          "Structured project data for consistent rendering.",
        ],
      },
      {
        title: "Deployment & Discoverability",
        description:
          "The site is deployed on Vercel and includes page metadata, canonical URL configuration, social-sharing metadata, and analytics. These provide a foundation for discoverability and monitoring, although search rankings depend on factors beyond metadata alone.",
        bullets: [
          "Deployment on Vercel.",
          "Page metadata and canonical URL configuration.",
          "Analytics integration and SEO foundations.",
        ],
      },
    ],
  },
];

// export const projects: PortfolioProject[] = [
//   {
//     slug: "ntca-secure-file-sharing",
//     title: "NTCA Secure File Sharing App",
//     shortTitle: "NTCA Secure File Sharing",
//     description:
//       "A secure document exchange application featuring role-based access, controlled registration, account protection, and optimized rendering for large datasets.",
//     image: "/images/p4.jpg",
//     category: "Security & Document Management",
//     techStack: [
//       "React.js",
//       "TypeScript",
//       "Node.js",
//       "MongoDB",
//       "Redux",
//       "Material UI",
//       "React Window",
//     ],
//     role: "Full-stack application development",
//     overview:
//       "The NTCA Secure File Sharing App was built to support controlled document exchange with differentiated permissions for Admins, Sub-Admins, and End Users. The application combines access management, account security, and large-dataset rendering in a single workflow.",
//     contributions: [
//       "Designed and developed application functionality around Admin, Sub-Admin, and End User roles.",
//       "Implemented invitation-only registration to control how users join the application.",
//       "Implemented account locking and browser geolocation functionality as part of the application's security features.",
//       "Worked with HTTP-only cookies, access and refresh tokens, and strict origin policies to strengthen authentication and request security.",
//       "Used React Window virtual lists to render large datasets more efficiently.",
//     ],
//     engineeringHighlights: [
//       "Role-based access control for different user types.",
//       "Invitation-based onboarding and account-locking behavior.",
//       "Authentication and session-security considerations involving HTTP-only cookies and access/refresh tokens.",
//       "Virtualized list rendering to limit the amount of data rendered in the DOM at once.",
//     ],
//     outcome:
//       "Delivered functionality focused on controlled access, secure document collaboration, and efficient handling of large lists. Quantitative security or performance improvements were not provided, so no numerical results are claimed.",
//     sections: [
//       {
//         title: "Access control and onboarding",
//         description:
//           "The application supports three user roles with different levels of access. Invitation-only registration provides a controlled onboarding flow instead of unrestricted public signup.",
//         bullets: [
//           "Admin, Sub-Admin, and End User roles.",
//           "Invitation-based registration.",
//           "Account-locking functionality.",
//         ],
//       },
//       {
//         title: "Authentication and application security",
//         description:
//           "Authentication-related implementation focused on protecting session credentials and enforcing stricter request-origin policies.",
//         bullets: [
//           "HTTP-only cookies for protected cookie-based credentials.",
//           "Access and refresh token handling.",
//           "Strict origin validation policies.",
//           "Security measures designed to reduce relevant XSS and CSRF risks.",
//         ],
//       },
//       {
//         title: "Rendering large datasets",
//         description:
//           "React Window virtual lists were used to avoid rendering every item in a large list at once. Virtualization reduces unnecessary DOM work when displaying extensive collections.",
//       },
//     ],
//   },

//   {
//     slug: "amway-ecommerce-platform",
//     title: "Amway E-Commerce Platform",
//     shortTitle: "Amway E-Commerce",
//     description:
//       "Enterprise e-commerce frontend development using reusable UI modules and a microfrontend architecture.",
//     image: "/images/p1.jpg",
//     category: "E-Commerce",
//     techStack: [
//       "React.js",
//       "TypeScript",
//       "Redux",
//       "Microfrontend Architecture",
//       "Storybook",
//     ],
//     role: "Frontend development",
//     overview:
//       "A large-scale e-commerce platform where frontend modularity, consistent user experiences, and maintainable UI delivery were important engineering concerns.",
//     contributions: [
//       "Contributed to frontend development using React.js and a microfrontend architecture.",
//       "Developed reusable UI modules designed to support independently deployable frontend experiences.",
//       "Worked on frontend performance optimization.",
//       "Improved responsive user experiences across enterprise workflows.",
//     ],
//     engineeringHighlights: [
//       "Microfrontend-based UI organization.",
//       "Reusable React components and modules.",
//       "Redux-based application state management.",
//       "Responsive interface development and frontend performance work.",
//     ],
//     outcome:
//       "Contributed reusable frontend modules and responsive experiences within a large-scale e-commerce platform. The exact performance gains and deployment metrics are not available.",
//     sections: [
//       {
//         title: "Modular frontend architecture",
//         description:
//           "The project used a microfrontend approach to organize a large frontend into smaller UI modules. The goal of this architecture was to support scalable frontend delivery and independent deployment of modules.",
//       },
//       {
//         title: "Reusable user interface components",
//         description:
//           "Reusable React components helped maintain consistent interface patterns while reducing the need to rebuild similar UI functionality across different parts of the application.",
//       },
//       {
//         title: "Performance and responsive experiences",
//         description:
//           "Frontend performance optimization and responsive layouts were part of the contribution, with attention to usable experiences across enterprise workflows.",
//       },
//     ],
//   },

//   {
//     slug: "hdfc-sky-trading-platform",
//     title: "HDFC SKY Trading Platform",
//     shortTitle: "HDFC SKY",
//     description:
//       "Frontend development for a trading platform covering stocks, mutual funds, and investment services.",
//     image: "/images/p3.jpg",
//     category: "Fintech",
//     techStack: ["React.js", "JavaScript", "Redux", "Material UI", "REST APIs"],
//     role: "Frontend development and API integration",
//     overview:
//       "HDFC SKY is a unified trading platform for stocks, mutual funds, and investment services. My contribution focused on frontend components, integration with business-critical REST APIs, and responsive user workflows.",
//     contributions: [
//       "Developed reusable frontend components.",
//       "Integrated business-critical REST APIs into user-facing workflows.",
//       "Improved responsive layouts using Material UI.",
//       "Worked on interface consistency and usability across key application flows.",
//     ],
//     engineeringHighlights: [
//       "Reusable React components.",
//       "REST API integration.",
//       "Redux for application state management.",
//       "Material UI for interface components and responsive layouts.",
//     ],
//     outcome:
//       "Contributed frontend functionality and API-integrated user workflows for a financial-services platform. No unverified trading-volume, conversion, or performance figures are claimed.",
//     sections: [
//       {
//         title: "Building trading-related user workflows",
//         description:
//           "The platform brings together multiple investment services. The frontend needs to present application data and user actions through clear, responsive workflows.",
//       },
//       {
//         title: "API integration",
//         description:
//           "REST API integration connected the frontend with business-critical application services. Reusable components helped keep UI behavior consistent across relevant screens.",
//       },
//       {
//         title: "Responsive UI development",
//         description:
//           "Material UI and responsive layout techniques were used to build interfaces that adapt to different screen sizes while maintaining a consistent user experience.",
//       },
//     ],
//   },

//   {
//     slug: "one-muthoot-web-application",
//     title: "One Muthoot Web Application / Admin Panel",
//     shortTitle: "One Muthoot",
//     description:
//       "Administrative dashboards and management interfaces for loan products, blog content, and user operations.",
//     image: "/images/p5.jpg",
//     category: "Fintech & Administration",
//     techStack: ["Next.js", "Node.js", "JavaScript", "Tailwind CSS", "Redux"],
//     role: "Web application development",
//     overview:
//       "The One Muthoot web application and admin panel provided management interfaces for loan products, blogs, and user operations. The work emphasized reusable layouts, predictable navigation, and maintainable UI components.",
//     contributions: [
//       "Developed administrative dashboards and management interfaces.",
//       "Built reusable layouts for consistent presentation across screens.",
//       "Implemented dynamic routing with Next.js.",
//       "Improved UI consistency and maintainability using Tailwind CSS and component-based development.",
//     ],
//     engineeringHighlights: [
//       "Next.js dynamic routing.",
//       "Reusable layouts and component-based UI.",
//       "Tailwind CSS styling.",
//       "Redux-based state management.",
//     ],
//     outcome:
//       "Delivered reusable administrative interfaces for managing application content and operational workflows. No unsupported business-impact figures are included.",
//     sections: [
//       {
//         title: "Administrative dashboards",
//         description:
//           "Management interfaces supported workflows involving loan products, blog content, and user operations.",
//       },
//       {
//         title: "Routing and reusable layouts",
//         description:
//           "Next.js dynamic routing supported navigation between application views, while shared layouts helped keep the interface consistent and easier to maintain.",
//       },
//       {
//         title: "Maintainable component styling",
//         description:
//           "Tailwind CSS and component-based development were used to build and maintain reusable interface patterns.",
//       },
//     ],
//   },

//   {
//     slug: "jeeves-admin-control-panel",
//     title: "Jeeves Admin Control Panel",
//     shortTitle: "Jeeves Admin Panel",
//     description:
//       "Administrative tools for managing users, catalogs, files, roles, and advertising campaigns.",
//     image: "/images/p2.jpg",
//     category: "Administration & Operations",
//     techStack: ["React.js", "Node.js", "TypeScript", "Redux", "Material UI"],
//     role: "Frontend development and API integration",
//     overview:
//       "The Jeeves Admin Control Panel brought together operational tools for managing users, catalogs, files, roles, and advertising campaigns. The interface needed reusable components and responsive layouts for a variety of administrative tasks.",
//     contributions: [
//       "Developed administrative tools for user, catalog, file, and role management.",
//       "Built responsive layouts and reusable frontend modules with React.js and Material UI.",
//       "Contributed to advertising campaign management functionality.",
//       "Collaborated with mobile and backend teams on API integration and analytics synchronization.",
//     ],
//     engineeringHighlights: [
//       "Reusable React components.",
//       "Responsive Material UI layouts.",
//       "Redux application state management.",
//       "Coordination across frontend, backend, and mobile integrations.",
//     ],
//     outcome:
//       "Contributed reusable administrative interfaces and cross-team integrations for operational workflows. Specific time savings or adoption metrics were not provided.",
//     sections: [
//       {
//         title: "Operational management tools",
//         description:
//           "The control panel included tools for managing multiple areas of an application, including users, catalogs, files, roles, and advertising campaigns.",
//       },
//       {
//         title: "Reusable responsive interfaces",
//         description:
//           "React.js and Material UI supported the development of reusable components and responsive layouts across administrative screens.",
//       },
//       {
//         title: "Cross-team integration",
//         description:
//           "Collaboration with mobile and backend teams supported API integration and analytics synchronization between application components.",
//       },
//     ],
//   },

//   {
//     slug: "chicos-ecommerce-platform",
//     title: "Chico’s E-Commerce Platform",
//     shortTitle: "Chico’s E-Commerce",
//     description:
//       "Legacy storefront migration from Knockout.js to React.js using the Oracle Storefront Framework.",
//     image: "/images/p6.jpg",
//     category: "E-Commerce & Migration",
//     techStack: [
//       "Oracle Commerce Cloud",
//       "Oracle Storefront Framework",
//       "React.js",
//       "Redux",
//     ],
//     role: "Frontend development and storefront migration",
//     overview:
//       "The project involved migrating a legacy storefront architecture from Knockout.js to React.js using the Oracle Storefront Framework, while preserving a consistent and responsive shopping experience.",
//     contributions: [
//       "Contributed to migration of legacy storefront functionality from Knockout.js to React.js.",
//       "Worked with the Oracle Storefront Framework.",
//       "Implemented responsive, pixel-conscious UI layouts across multiple devices and browsers.",
//     ],
//     engineeringHighlights: [
//       "Migration from a legacy UI framework to React.js.",
//       "Oracle Commerce Cloud storefront development.",
//       "Redux-based state management.",
//       "Cross-device and cross-browser layout consistency.",
//     ],
//     outcome:
//       "Contributed to the storefront migration and responsive UI implementation. The scope of the migration and quantified business outcomes are not specified.",
//     sections: [
//       {
//         title: "Modernizing the storefront",
//         description:
//           "The work involved moving storefront functionality from a legacy Knockout.js implementation to React.js within the Oracle Storefront Framework.",
//       },
//       {
//         title: "Responsive interface implementation",
//         description:
//           "The migration required attention to layout consistency across different viewport sizes and browsers, helping preserve the expected shopping experience.",
//       },
//       {
//         title: "State and component architecture",
//         description:
//           "React.js and Redux formed part of the frontend stack used in the migrated storefront.",
//       },
//     ],
//   },

//   {
//     slug: "syed-ahmad-developer-portfolio",
//     title: "Syed Ahmad — Dev Portfolio",
//     shortTitle: "My Developer Portfolio",
//     description:
//       "A responsive developer portfolio showcasing professional experience, selected projects, technical skills, and contact options through an animated interface with light and dark themes.",
//     // Add a real screenshot of your deployed portfolio at this path.
//     image: "/images/portfolio.png",
//     category: "Personal Project",
//     techStack: [
//       "Next.js",
//       "React",
//       "TypeScript",
//       "Tailwind CSS",
//       "next-themes",
//       "React TSParticles",
//       "Vercel Analytics",
//     ],
//     role: "Personal project — design and development",
//     overview:
//       "This portfolio is a personal project designed to present my professional experience, selected engineering work, skills, and contact information in a single, responsive website. It combines a distinctive animated visual identity with structured content and theme support.",
//     contributions: [
//       "Designed and developed a responsive portfolio using Next.js and React.",
//       "Implemented theme switching with next-themes to support light and dark modes.",
//       "Built an animated hero experience using particle effects and typing animations.",
//       "Organized professional experience, skills, projects, and testimonials into dedicated sections.",
//       "Configured page metadata, canonical URL, Open Graph information, and other SEO foundations.",
//       "Integrated Vercel Analytics for website analytics.",
//     ],
//     engineeringHighlights: [
//       "Next.js App Router and React component architecture.",
//       "Reusable UI components styled with Tailwind CSS.",
//       "Theme-aware styling for light and dark modes.",
//       "Animated UI elements using particle and typing-animation libraries.",
//       "SEO metadata and responsive page design.",
//     ],
//     outcome:
//       "Built and deployed a personal website that brings together professional background, projects, skills, and contact options. Lighthouse results have previously been measured, but this case study does not claim that those historical results represent current performance.",
//     sections: [
//       {
//         title: "Design and visual identity",
//         description:
//           "The site uses a distinctive starry-night visual direction, animated effects, and theme-aware styling to create a recognizable developer identity while presenting professional information.",
//       },
//       {
//         title: "Reusable UI and theme support",
//         description:
//           "React components organize the main page sections, while next-themes supports switching between light and dark modes. Tailwind CSS is used to style components and apply theme-specific presentation.",
//       },
//       {
//         title: "Motion and interaction",
//         description:
//           "Particle effects, typing animations, scroll-related effects, and interactive elements add movement to the experience. These effects should remain balanced with readability, accessibility, and mobile performance.",
//       },
//       {
//         title: "SEO and discoverability",
//         description:
//           "The site includes title and description metadata, canonical URL configuration, Open Graph metadata, and index/follow directives. These are technical foundations for search visibility, not a guarantee of ranking.",
//       },
//     ],
//   },
// ];

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

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
