"use client";

import React, { useState, useEffect } from "react";
import Logo from "../../Helper/Logo";
import { Navlinks } from "../../../Constant/Constant";
import Link from "next/link";
import { Download, MenuIcon } from "lucide-react";
import ThemeToggler from "../../Helper/ThemeToggler";
import { scrollToSection } from "@/lib/utils";

type NavProps = {
  openMobileNav: () => void;
};

const Nav = ({ openMobileNav }: NavProps) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${navBg ? "dark:bg-[#0a0a14]/85 dark:backdrop-blur-md bg-white shadow-md" : "fixed"} transition-all duration-200 fixed top-0 left-0 w-full z-50 h-[12vh]`}
    >
      <div className="flex item-center h-full justify-between w-[90%] xl:w-[85%] mx-auto">
        {/* Logo with extra gap */}
        <div className="flex items-center space-x-10">
          <Logo />
        </div>

        {/* Nav links with reduced gap */}
        <div className="hidden lg:flex items-center space-x-6">
          {Navlinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className="font-semibold text-black dark:text-white
                     hover:text-blue-600 dark:hover:text-yellow-200
                     transition-colors duration-300 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <a
            href="/files/Syed_Adeeb_IND-CV.pdf"
            // target="_blank"
            download="Syed_Adeeb_IND-CV.pdf"
            rel="noopener noreferrer"
            className="box-border relative z-20 inline-flex items-center justify-center w-auto px-5
             sm:px-5 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600
             rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200
             hover:ring-offset-indigo-500 ease focus:outline-none"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </a>
          <ThemeToggler />
          <MenuIcon
            onClick={openMobileNav}
            className="w-7 h-7 sm:w-8 sm:h-8 lg:hidden text-black dark:text-white cursor-pointer"
          />
        </div>
      </div>
    </div>

    // <div className="transition-all duration-300 h-[12vh] z-100 fixed w-full">
    //   <div className="">
    //     <Logo />

    //     <div className="hidden lg:flex items-center space-x-10">
    //       {Navlinks.map((link, index) => {
    //         return (
    //           <Link
    //             key={index}
    //             href={link.href}
    //             className="dark:text-white text-black hover:text-yellow-500
    //             dark:hover:text-yellow-200 font-semibold transition-all duration-300"
    //           >
    //             <p>{link.name}</p>
    //           </Link>
    //         );
    //       })}
    //     </div>

    //     <div className="flex items-center space-x-4">
    //       <a
    //         href="#"
    //         className="box-border relative z-20 inline-flex items-center justify-center w-auto px-6
    //         sm:px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600
    //         rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200
    //         hover:ring-offset-indigo-500 ease focus:outline-none"
    //       >
    //         <span className="relative z-20 flex items-center space-x-2 text-sm">
    //           <Download className="w-4 h-4" />
    //           <span>Download CV</span>
    //         </span>
    //       </a>

    //       <ThemeToggler />

    //       <MenuIcon className="w-8 h-8 lg:hidden text-black dark:text-white cursor-pointer" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Nav;
