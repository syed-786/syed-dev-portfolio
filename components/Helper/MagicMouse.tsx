"use client";

import { useEffect } from "react";
import { Trail, Ripple } from "mouse-animations";
import { useTheme } from "next-themes";

export default function MagicCursor() {
  const { resolvedTheme, themes } = useTheme();

  useEffect(() => {
    const trail = new Trail({
      color: resolvedTheme === "dark" ? "#c084fc" : "#6366f1",
      size: 4,
      length: 25,
      decay: 0.05,
      blur: 3,
    });

    const ripple = new Ripple({
      color: resolvedTheme === "dark" ? "#c084fc" : "#6366f1",
      duration: 500,
      maxSize: 70,
    });

    return () => {
      trail.destroy();
      ripple.destroy();
    };
  }, [themes]);

  return null;
}
