import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Provider from "@/components/Hoc/Provider";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import MagicCursor from "@/components/Helper/MagicMouse";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syed-dev-portfolios.vercel.app"),

  title: {
    default: "Syed Adeeb Ahmad | Senior Full Stack Developer",
    template: "%s | Syed Adeeb Ahmad",
  },

  description:
    "Syed Adeeb Ahmad is a Senior Full Stack Developer with 8 years of experience building scalable, high-performance web applications with React, Next.js, TypeScript, Node.js and modern web technologies.",

  keywords: [
    "Syed Adeeb Ahmad",
    "Syed Ahmad",
    "Syed",
    "Senior Software Engineer",
    "Senior Software Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Senior Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
  ],

  authors: [
    {
      name: "Syed Adeeb Ahmad",
      url: "https://syed-dev-portfolios.vercel.app",
    },
  ],

  creator: "Syed Adeeb Ahmad",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://syed-dev-portfolios.vercel.app",

    title: "Syed Adeeb Ahmad | Senior Full Stack Developer",

    description:
      "Senior Full Stack Developer with 8 years of experience building scalable and high-performance web applications with React, Next.js, TypeScript and Node.js.",

    siteName: "Syed Adeeb Ahmad",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Syed Adeeb Ahmad - Senior Full Stack Developer",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://syed-dev-portfolios.vercel.app",
  },
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
          {children}
          <Footer />
          <ScrollToTop />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
