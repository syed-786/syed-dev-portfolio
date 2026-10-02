import { useState } from "react";

type ExpandableTextProps = {
  text: string;
  wordLimit?: number;
};

export default function ExpandableText({
  text,
  wordLimit = 20,
}: ExpandableTextProps) {
  const [expanded, setExpanded] = useState(false);

  // Split into words
  const words = text.split(" ");
  const isLong = words.length > wordLimit;
  const preview = words.slice(0, wordLimit).join(" ") + (isLong ? "..." : "");

  return (
    <div className="transition-all duration-500 ease-in-out">
      <p className="text-muted-foreground text-sm mb-2">
        {expanded || !isLong ? text : preview}
        {isLong && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="cursor-pointer text-blue-600 dark:text-violet-300 font-semibold text-xs hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>
    </div>
  );
}
