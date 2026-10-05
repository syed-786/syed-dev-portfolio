"use client";

import { Button } from "@/components/ui/button";
import { FolderOpen, FileText, Files, Handshake } from "lucide-react";
import React, { useCallback } from "react";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { useTheme } from "next-themes";

const Hero = () => {
  const { resolvedTheme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden
    bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)]
   dark:bg-[radial-gradient(circle_at_50%_70%,#3b2c63_0%,#291a40_35%,#1a102d_60%,#010101_100%)]
    "
    >
      {/* Particle background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          fpsLimit: 60,
          detectRetina: true,

          fullScreen: {
            enable: false,
          },

          background: {
            color: { value: "transparent" }, // keep transparent so gradient shows
            image:
              resolvedTheme === "dark"
                ? //"radial-gradient(circle farthest-corner at 50.3% 47.3%, rgba(113,42,92,1) 0.1%, rgba(40,25,46,1) 90%)"
                  "radial-gradient(circle at 50% 70%, #3b2c63 0%, #291a40 35%, #1a102d 60%, #010101 100%)"
                : "radial-gradient(circle 476px at 54.8% 51.5%, rgba(168,229,253,1) 0%, rgba(244,244,254,1) 42.3%, rgba(244,244,254,1) 100.2%)",
          },

          particles: {
            number: {
              value: 75,
              density: {
                enable: true,
                area: 1000,
              },
            },

            color: {
              value:
                resolvedTheme === "dark"
                  ? ["#e0e7ff", "#ffffff", "#c084fc", "#a78bfa"] //"#F472B6" //
                  : "#6366F1",
            },

            shape: {
              type: "circle",
            },

            opacity: {
              value: resolvedTheme === "dark" ? 1 : 0.9,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.25,
                sync: false,
              },
            },

            size: {
              value: { min: 1, max: 4 },
              random: true,
              anim: {
                enable: true,
                speed: 1,
                size_min: 0.3,
                sync: false,
              },
            },

            links: {
              enable: true,
              distance: 150,
              color:
                resolvedTheme === "dark"
                  ? ["#e0e7ff", "#ffffff", "#c084fc", "#a78bfa"] //"#F472B6" //
                  : "#818CF8",
              opacity: resolvedTheme === "dark" ? 0.1 : 0.35,
              width: 1,
            },

            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,

              outModes: {
                default: "bounce",
                // "out"
                // "bounce"
                // "destroy"
                // "split"
                // "none"
              },
            },
          },

          interactivity: {
            detectsOn: "window",

            events: {
              onHover: {
                enable: true,
                mode: "grab",
                // "grab"
                // "repulse"
                // "bubble"
                // "connect"
                // "slow"
                // "attract"
              },

              onClick: {
                enable: true,
                mode: "push",
                // "push"
                // "repulse"
                // "remove"
                // "bubble"
              },

              resize: true,
            },

            modes: {
              grab: {
                distance: 180,
                links: {
                  opacity: 0.65,
                },
              },

              repulse: {
                distance: 150,
                duration: 0.4,
                speed: 1,
              },

              bubble: {
                distance: 180,
                size: 8,
                duration: 2,
                opacity: 0.8,
              },

              connect: {
                distance: 120,
                radius: 60,
                links: {
                  opacity: 0.5,
                },
              },

              push: {
                quantity: 3,
              },

              remove: {
                quantity: 2,
              },

              attract: {
                distance: 180,
                duration: 0.4,
                speed: 1,
              },

              slow: {
                factor: 3,
                radius: 200,
              },
            },
          },
        }}
      />

      {/* content */}
      <div className="relative z-10 text-center">
        {/* subtitle */}
        <div className="sm:mb-6" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Available for opportunities
          </span>
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I&apos;m{" "}
          <span className="text-purple-800 dark:text-yellow-300">
            Syed Ahmad
          </span>
        </h1>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4 sm:mb-8 h-12"
        >
          <TypeAnimation
            sequence={[
              "Senior Software Engineer",
              2000,
              "Senior Frontend Developer",
              2000,
              "Senior MERN Stack Developer",
              2000,
              "Senior Full Stack Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="font-mono"
            repeat={Infinity}
          />
        </div>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10"
        >
          {
            "Transforming creative ideas into high-performance digital experiences through thoughtful engineering, modern technologies & a passion to build, refine, & create."
          }
        </p>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-offset="-0.1"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="w-fit mx-auto sm:mx-0 px-5 py-5">
            <a href="#contact" className="flex items-center">
              <Handshake className="w-5 h-5 mr-2" />
              Let’s Connect
            </a>
          </Button>

          <Button asChild size="lg" className="w-fit mx-auto sm:mx-0 px-7 py-5">
            <a
              href="/files/Syed_FullStk_IND-CV.pdf"
              target="_blank"
              // download="Syed_Adeeb_IND-CV.pdf"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Files className="w-5 h-5 mr-2" />
              Preview CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// "use client";

// import { Button } from "@/components/ui/button";
// import { Download, FolderOpen } from "lucide-react";
// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// const Hero = () => {
//   return (
//     <div
//       className="relative min-h-screen
//     bg-[radial-gradient(circle_476px_at_54.8%_51.5%,rgba(168,229,253,1)_0%,rgba(244,244,254,1)_42.3%,rgba(244,244,254,1)_100.2%)]
//     flex items-center justify-center overflow-hidden
//     dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,rgba(113,42,92,1)_0.1%,rgba(40,25,46,1)_90%)]"
//     >
//       {/* content */}
//       <div className="relative z-10 text-center">
//         {/* sub title */}
//         <div className="sm:mb-6">
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
//             <span className="w-2 h-2 rounded-full bg-green-500"></span>
//             Available for opportunities
//           </span>
//         </div>

//         <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ">
//           Hi, I&apos;m{" "}
//           <span className="text-purple-800 dark:text-yellow-300">
//             Syed Ahmad
//           </span>
//         </h1>

//         <div
//           className="text-xl sm:text-2xl md:text-3xl text-black dark:text-white font-semibold mb-4
//         sm:mb-8 h-12"
//         >
//           <TypeAnimation
//             sequence={[
//               // Same substring at the start will only be typed out once, initially
//               "Senior Software Engineer",
//               2000, // wait 2s before replacing
//               "Senior Frontend Developer",
//               2000,
//               "Senior FullStack Developer",
//               2000,
//             ]}
//             wrapper="span"
//             speed={50}
//             className="font-mono"
//             repeat={Infinity}
//           />
//         </div>
//         <p className="text-lg text-muted-foreground dark:text-gray-200 max-w-2xl mx-auto mb-10">
//           Crafting exceptional digital experiences with modern technologies.
//           Passionate about building scalable applications and teaching others.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           {/* View Projects */}
//           <Button asChild size="lg" className="w-fit mx-auto sm:mx-0 px-5 py-5">
//             <a href="#projects" className="flex items-center">
//               <FolderOpen className="w-5 h-5 mr-2" />
//               View Projects
//             </a>
//           </Button>

//           {/* Download CV */}
//           <Button asChild size="lg" className="w-fit mx-auto sm:mx-0 px-5 py-5">
//             <a href="#download" className="flex items-center">
//               <Download className="w-5 h-5 mr-2" />
//               Download CV
//             </a>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
