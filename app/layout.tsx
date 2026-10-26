import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import MagicCursor from "@/components/Helper/MagicMouse";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import ArubaChatWidget from "@/components/ArubaAI/ArubaChatWidget";
import AOSProvider from "@/components/Hoc/AOSProvider";
import ArubaAIWrapper from "@/components/ArubaAI/ArubaAIWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const siteUrl = "https://syed-dev-portfolios.vercel.app";

const siteTitle = "Syed Adeeb Ahmad | Senior Full Stack Developer";

const siteDescription =
  "Explore the AI-Powered portfolio of Syed Adeeb Ahmad, a Senior Full Stack Developer with 8 years of experience building scalable web applications and AI-powered experiences using React, Next.js, TypeScript, Node.js, and Google Gemini.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Syed Adeeb Ahmad",
  },

  description: siteDescription,

  applicationName: "Syed Adeeb Ahmad | Developer Portfolio",

  keywords: [
    // Personal Branding
    "Syed Adeeb Ahmad",
    "Syed Ahmad",
    "Syed Adeeb Ahmad Portfolio",
    "Syed Adeeb Ahmad Developer",

    // Professional Roles
    "Senior Full Stack Developer",
    "Full Stack Developer",
    "Senior Software Engineer",
    "Senior Software Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Senior Frontend Developer",

    // Frontend Technologies
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "React.js",
    "Next.js",
    "TypeScript",

    // Backend Technologies
    "Node.js Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Redis",

    // AI & LLM Development
    "AI Developer",
    "AI-Powered Web Applications",
    "AI Chatbot Development",
    "LLM Integration",
    "Generative AI",
    "Google Gemini",
    "Vercel AI SDK",
    "Conversational AI",
    "AI Assistant",
    "Streaming AI Responses",

    // Personal AI Project
    "Aruba AI",
    "Aruba AI Assistant",
  ],

  authors: [
    {
      name: "Syed Adeeb Ahmad",
      url: siteUrl,
    },
  ],

  creator: "Syed Adeeb Ahmad",

  publisher: "Syed Adeeb Ahmad",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,

    title: siteTitle,

    description:
      "Discover the AI-Powered portfolio of Syed Adeeb Ahmad, a Senior Full Stack Developer specializing in React, Next.js, TypeScript, Node.js, and AI-powered web applications. Explore projects, technical expertise, and Aruba AI, an intelligent conversational assistant.",

    siteName: "Syed Adeeb Ahmad | AI-Powered Developer Portfolio",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Syed Adeeb Ahmad — Senior Full Stack Developer | AI-Powered Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: siteTitle,

    description:
      "Senior Full Stack Developer building scalable web applications and AI-powered experiences with React, Next.js, TypeScript, Node.js, and Google Gemini.",

    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
  },

  category: "technology",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${font.className} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Provider>
          <MagicCursor />
          <ResponsiveNav />
          <AOSProvider />
          {children}
          <Footer />
          <ScrollToTop />
          <ArubaAIWrapper />
        </Provider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
