import React from "react";
import { Navlinks } from "../../../Constant/Constant";
import Link from "next/link";
import { X, CodeSquareIcon } from "lucide-react";
import Logo from "@/components/Helper/Logo";
import { scrollToSection } from "@/lib/utils";

type NavProps = {
  isMobileNavOpen: boolean;
  closeMobileNav: () => void;
};

const MobileNav = ({ isMobileNavOpen, closeMobileNav }: NavProps) => {
  const mobileNavClass = isMobileNavOpen
    ? "translate-x-0"
    : "-translate-x-full";

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
        bg-gradient-to-b from-blue-50 to-white dark:from-[#0a0a12] dark:via-[#190a2a] dark:to-[#140022]
        backdrop-blur-xl shadow-2xl flex flex-col justify-start pt-12 space-y-8`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3 px-12 mb-6">
          <Logo showText={true} size="md" />
        </div>

        {/* Links */}
        {Navlinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(link.id);
              closeMobileNav();
            }}
            className="block w-full ml-12 text-lg sm:text-xl font-semibold
                       text-gray-700 dark:text-gray-200
                       hover:text-blue-600 dark:hover:text-violet-400
                       transition-colors duration-300  w-fit pb-1"
          >
            {link.name}
          </Link>
        ))}

        {/* Close Icon */}
        <X
          onClick={closeMobileNav}
          className="absolute top-4 right-4 w-7 h-7 sm:w-8 sm:h-8
                     text-gray-700 dark:text-gray-200 cursor-pointer hover:text-red-500 transition-colors"
        />
      </div>
    </>
  );
};

export default MobileNav;
