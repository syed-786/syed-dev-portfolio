# Developer Portfolio | Next.js & Aruba AI

A modern, responsive developer portfolio showcasing my work as a **Senior Full-Stack Engineer**
with **7+ years of experience** building scalable, high-performance web applications.

The portfolio brings together selected projects, professional experience, technical skills, and **Aruba AI** — an interactive AI assistant that helps visitors explore my background and work.

**Live portfolio:** [syed-dev-portfolios.vercel.app](https://syed-dev-portfolios.vercel.app/)

## ✨ Highlights

- **Responsive interface** — polished desktop and mobile experiences with light and dark themes.
- **Project case studies** — selected work, technical stacks, and engineering contributions.
- **Interactive experience** — animations, particle effects, and animated statistics.
- **Aruba AI** — a conversational assistant available through a floating chat widget and a dedicated page.
- **Production-oriented backend** — server-side AI requests, request validation, rate limiting, and usage controls.
- **Search and accessibility considerations** — SEO metadata and responsive, semantic UI patterns.

## 🤖 Aruba AI

**Aruba AI** is a portfolio-focused conversational assistant built into the Next.js application. Visitors can ask about my experience, technical skills, projects, and professional background.

### Technical capabilities

- **Google Gemini integration** through the **Vercel AI SDK**.
- **Streaming chat responses** for a conversational user experience.
- **Portfolio-grounded responses** using structured knowledge and assistant instructions.
- **Context caching** to reduce repeated input processing where supported.
- **Upstash Redis** for request rate limiting and shared usage/quota tracking.
- **Token budgeting and conversation-history controls** to manage resource usage.
- **Server-side API integration** so provider credentials are not sent to the browser.

> Aruba is a portfolio assistant, not a general-purpose AI agent or retrieval-augmented generation (RAG) platform. Its purpose is to answer questions about the portfolio and professional background.

## 🛠️ Technology Stack

| Area                           | Technologies                             |
| ------------------------------ | ---------------------------------------- |
| Frontend                       | Next.js, React, TypeScript, Tailwind CSS |
| Backend                        | Next.js Route Handlers, Node.js runtime  |
| AI                             | Google Gemini, Vercel AI SDK             |
| Rate limiting & usage controls | Upstash Redis                            |
| Deployment                     | Vercel                                   |

## 🚀 Getting Started

### Prerequisites

- Node.js and npm compatible with the project's Next.js version
- A Google Gemini API key
- Upstash Redis REST credentials for the AI chat's rate limiting and usage controls

### Install and run

```bash
npm install
```

Create a `.env.local` file in the project root:

```dotenv
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
```

The variable names above are the standard names used by the Gemini provider and Upstash Redis integration. If your local implementation uses additional environment variables, configure those as well.

Start the development server:

```bash
npm run dev
```

Open **http://localhost:3000**.

### Production build

```bash
npm run build
npm run start
```

## 🔐 Security and Environment Configuration

- Keep `.env.local` and all API keys out of version control.
- Configure production secrets through **Vercel → Project Settings → Environment Variables**.
- Use a **separate Google Cloud project/API key** for production to reduce interference with development usage.
- Redis credentials can be shared temporarily across environments, but doing so also shares Redis counters and usage limits unless keys are explicitly namespaced.
- Never expose provider credentials through `NEXT_PUBLIC_` variables or client-side components.
- Avoid logging credentials, complete conversations, or confidential data.
- Treat system prompts as application instructions, **not** as a substitute for server-side security enforcement.

A public GitHub repository exposes any prompt or knowledge files committed to it, including historical versions. Review these files before publishing.

## ☁️ Deployment

The portfolio is deployed on **Vercel**. To deploy your own instance:

1. Connect the GitHub repository to a Vercel project.
2. Configure the required server-side environment variables for **Production**.
3. Deploy the production branch.
4. Test the homepage, project case studies, Aruba chat widget, and dedicated Aruba page on desktop and mobile.
5. Review server-side activity under the project's **Vercel Logs**, including chat request errors and latency.

The Aruba API route's execution duration can be configured using Next.js's `maxDuration` export, subject to the deployment platform's limits. Longer execution limits do not necessarily make AI responses faster.

## 📬 Connect

Interested in collaborating or discussing frontend, full-stack, or AI-enabled web development? Visit the [live portfolio](https://syed-dev-portfolios.vercel.app/) for contact details and professional links.

---

Built with **Next.js, TypeScript, and a passion for thoughtful engineering**.
