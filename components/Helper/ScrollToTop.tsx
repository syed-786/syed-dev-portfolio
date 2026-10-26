"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      title="Scroll to top"
      onClick={scrollToTop}
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      className={`
        fixed bottom-28 right-8 z-40
        flex h-11 w-11 items-center justify-center
        rounded-full
        bg-blue-700 text-white
        shadow-lg shadow-blue-500/20
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:bg-blue-600
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-blue-500
        max-sm:bottom-24 max-sm:right-6
        cursor-pointer
        ${
          isVisible
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-75 opacity-0"
        }
      `}
    >
      <ArrowUp size={20} strokeWidth={2.2} />
    </button>
  );
};

export default ScrollToTop;
