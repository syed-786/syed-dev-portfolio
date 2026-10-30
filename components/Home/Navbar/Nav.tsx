"use client";

import React, { useState, useEffect } from "react";
import Logo from "../../Helper/Logo";
import { Navlinks } from "../../../Constant/Constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, MenuIcon } from "lucide-react";
import ThemeToggler from "../../Helper/ThemeToggler";
import { scrollToSection } from "@/lib/utils";

type NavProps = {
  openMobileNav: () => void;
};

const Nav = ({ openMobileNav }: NavProps) => {
  const [navBg, setNavBg] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 90);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    // On other pages, allow Next.js to navigate to the homepage.
    if (pathname !== "/") {
      return;
    }

    // On the homepage, preserve smooth scrolling.
    e.preventDefault();

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    scrollToSection(id);
  };

  return (
    <div
      className={`${
        navBg
          ? "dark:bg-[#0a0a14]/85 dark:backdrop-blur-md bg-white shadow-md"
          : ""
      } transition-all duration-200 fixed top-0 left-0 w-full z-50 h-[12vh]`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[85%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-10">
          <Logo />
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {Navlinks.map((link) => {
            const href = link.id === "home" ? "/" : `/#${link.id}`;

            return (
              <Link
                key={link.id}
                href={href}
                onClick={(e) => handleNavClick(e, link.id)}
                className="font-semibold text-black dark:text-white
                  hover:text-blue-600 dark:hover:text-yellow-200
                  transition-colors duration-300 ease-in-out"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <a
            href="/files/Syed FullStk IND-CV.pdf"
            download="Syed FullStk IND-CV.pdf"
            rel="noopener noreferrer"
            className="box-border relative z-20 inline-flex items-center
              justify-center w-auto px-5 sm:px-5 py-2 overflow-hidden
              font-bold text-white transition-all duration-300
              bg-indigo-600 rounded-md cursor-pointer group
              ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200
              hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </a>

          <ThemeToggler />

          <MenuIcon
            onClick={openMobileNav}
            className="w-7 h-7 sm:w-8 sm:h-8 lg:hidden
              text-black dark:text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
