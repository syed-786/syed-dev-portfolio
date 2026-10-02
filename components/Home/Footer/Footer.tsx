import React from "react";
import { socialLinksSec } from "@/lib/data";

const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col items-center text-center gap-2">
        {/* Branding */}
        <div className="text-lg font-semibold text-blue-500 dark:text-violet-300">
          &lt;Syed/&gt;
        </div>

        {/* Attribution */}
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <p>©{new Date().getFullYear()} Syed Adeeb Ahmad</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
