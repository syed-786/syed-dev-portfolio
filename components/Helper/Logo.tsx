import { CodeSquareIcon } from "lucide-react";
import React from "react";

type LogoProps = {
  showText?: boolean; // control whether "<Syed/>" is always visible
  size?: "sm" | "md" | "lg"; // optional sizing for different contexts
};

const Logo = ({ showText = false, size = "md" }: LogoProps) => {
  // dynamic sizing
  const iconSize =
    size === "sm" ? "w-5 h-5" : size === "lg" ? "w-8 h-8" : "w-6 h-6";
  const boxSize =
    size === "sm" ? "w-8 h-8" : size === "lg" ? "w-12 h-12" : "w-10 h-10";
  const textSize =
    size === "sm"
      ? "text-lg"
      : size === "lg"
        ? "text-2xl md:text-3xl"
        : "text-xl md:text-2xl";

  return (
    <div className="flex items-center space-x-2">
      {/* Icon box */}
      <div
        className={`bg-blue-800 dark:bg-blue-400 ${boxSize} rounded-lg flex items-center justify-center`}
      >
        <CodeSquareIcon className={`text-white ${iconSize}`} />
      </div>

      {/* Text */}
      {showText ? (
        <h1
          className={`${textSize} text-blue-800 dark:text-blue-400 font-bold`}
        >
          {"<Syed/>"}
        </h1>
      ) : (
        <h1
          className={`hidden sm:block ${textSize} text-blue-800 dark:text-blue-400 font-bold`}
        >
          {"<Syed/>"}
        </h1>
      )}
    </div>
  );
};

export default Logo;
