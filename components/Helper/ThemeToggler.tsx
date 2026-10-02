"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, resolvedTheme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    const mountCheck = () => {
      setMounted(true);
    };
    mountCheck();
  }, []);

  if (!mounted) return null;

  const currentTheme = resolvedTheme === "system" ? systemTheme : resolvedTheme;

  return (
    <div className="relative group">
      <button
        title={
          currentTheme === "dark"
            ? "Switch to Light Mode"
            : "Switch to Dark Mode"
        }
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
        className="p-2 transition w-10 h-10 curson-pointer bg-gray-200 dark:bg-gray-800 rounded-lg
    flex flex-col items-center justify-center "
      >
        {currentTheme === "dark" ? (
          <Sun className="text-white w-7 h-7 cursor-pointer" />
        ) : (
          <Moon className="text-black w-7 h-7 cursor-pointer" />
        )}
      </button>
      {/* <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition">
    {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
  </span> */}
    </div>
  );
};

export default ThemeToggler;
