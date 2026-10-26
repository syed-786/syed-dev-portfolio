"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = () => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-in-out",
    });

    return () => {
      // AOS has no destroy() API.
    };
  }, []);

  useEffect(() => {
    // Refresh animations after route changes.
    const timeout = setTimeout(() => {
      AOS.refreshHard();
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default AOSProvider;
