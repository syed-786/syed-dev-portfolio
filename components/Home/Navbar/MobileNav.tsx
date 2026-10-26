"use client";

import React from "react";
import { Navlinks } from "../../../Constant/Constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import Logo from "@/components/Helper/Logo";
import { scrollToSection } from "@/lib/utils";

type NavProps = {
  isMobileNavOpen: boolean;
  closeMobileNav: () => void;
};

const MobileNav = ({ isMobileNavOpen, closeMobileNav }: NavProps) => {
  const pathname = usePathname();

  const mobileNavClass = isMobileNavOpen
    ? "translate-x-0"
    : "-translate-x-full";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    // On homepage, preserve smooth scrolling.
    if (pathname === "/") {
      e.preventDefault();

      if (id === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        scrollToSection(id);
      }
    }

    // On other pages, allow Next.js to navigate
    // to /#section-id.

    closeMobileNav();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-500 ${
          isMobileNavOpen ? "opacity-70" : "opacity-0 pointer-events-none"
        } bg-black`}
        onClick={closeMobileNav}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] md:w-[40%]
          transform transition-transform duration-500 z-50 ${mobileNavClass}
          bg-gradient-to-b from-blue-50 to-white
          dark:from-[#0a0a12] dark:via-[#190a2a] dark:to-[#140022]
          backdrop-blur-xl shadow-2xl flex flex-col justify-start
          pt-12 space-y-8`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3 px-12 mb-6">
          <Logo showText={true} size="md" />
        </div>

        {/* Navigation Links */}
        {Navlinks.map((link) => {
          const href = link.id === "home" ? "/" : `/#${link.id}`;

          return (
            <Link
              key={link.id}
              href={href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`block ml-12 text-lg sm:text-xl font-semibold
                text-gray-700 dark:text-gray-200
                ${isMobileNavOpen ? "visible" : "hidden"}
                hover:text-blue-600 dark:hover:text-violet-400
                transition-colors duration-300 pb-1`}
            >
              {link.name}
            </Link>
          );
        })}

        {/* Close Button */}
        <button
          type="button"
          onClick={closeMobileNav}
          aria-label="Close navigation menu"
          className="absolute top-4 right-4
            text-gray-700 dark:text-gray-200
            cursor-pointer hover:text-red-500
            transition-colors"
        >
          <X className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>
      </div>
    </>
  );
};

export default MobileNav;
