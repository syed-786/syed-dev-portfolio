"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useTheme } from "next-themes";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

const particleVariants: Record<string, any> = {
  p1: { number: 150, speed: 1, color: "#6366F1" },
  p2: { number: 140, speed: 2, color: "#A78BFA" },
  p3: { number: 120, speed: 1.5, color: "#4F46E5" },
  p4: { number: 100, speed: 2.5, color: "#C084FC" },
  p5: { number: 80, speed: 1.2, color: "#3B82F6" },
  p6: { number: 60, speed: 1.8, color: "#8B5CF6" },
};

export default function ComingSoonPage() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id") || "p1";
  const { resolvedTheme } = useTheme();

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const variant = particleVariants[projectId];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        className="relative min-h-screen flex items-center justify-center overflow-hidden
        bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)]
        dark:bg-[radial-gradient(circle_at_50%_70%,#3b2c63_0%,#291a40_35%,#1a102d_60%,#010101_100%)]"
      >
        {/* Particle background */}
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0 z-0"
          options={{
            fpsLimit: 60,
            detectRetina: true,
            fullScreen: { enable: false },
            background: { color: { value: "transparent" } },
            particles: {
              number: {
                value: variant.number,
                density: { enable: true, area: 1000 },
              },
              color: { value: variant.color },
              shape: { type: "circle" },
              opacity: {
                value: resolvedTheme === "dark" ? 0.8 : 0.7,
                random: true,
              },
              size: { value: { min: 1, max: 4 }, random: true },
              links: {
                enable: true,
                distance: 150,
                color: variant.color,
                opacity: resolvedTheme === "dark" ? 0.3 : 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: variant.speed,
                random: true,
                straight: false,
                outModes: { default: "bounce" },
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.35,
                sync: false,
              },
            },
            interactivity: {
              detectsOn: "window",
              events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
                resize: true,
              },
              modes: {
                repulse: { distance: 100, links: { opacity: 0.75 } },
                push: { quantity: 3 },
              },
            },
          }}
        />

        {/* Content */}
        <div className="z-10 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100">
            🚧 Preview Not Yet Available! 🚧
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 italic">
            This demo is being finalized and will be available soon.
          </p>

          <Button asChild size="lg" className="w-fit mx-auto sm:mx-0 px-4 py-5">
            <a
              href="/#projects"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Go Back
            </a>
          </Button>
          {/* <Link
          href="/#projects"
          className="inline-block mt-6 px-6 py-2 rounded-lg bg-blue-600 text-white dark:bg-violet-600 hover:bg-blue-700 dark:hover:bg-violet-700 transition-colors"
        >
          <ChevronLeft />
          Go Back
        </Link> */}
        </div>
      </div>
    </Suspense>
  );
}
