"use client";

import { usePathname } from "next/navigation";
import ArubaChatWidget from "@/components/ArubaAI/ArubaChatWidget";

export default function ArubaFloatingWidget() {
  const pathname = usePathname();

  // Hide the floating chatbot on the full-page Aruba AI experience
  if (pathname === "/aruba-ai") {
    return null;
  }

  return <ArubaChatWidget />;
}
