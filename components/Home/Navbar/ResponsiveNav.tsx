"use client";

import React, { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openMobileNav = () => setIsMobileNavOpen(true);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <div>
      <Nav openMobileNav={openMobileNav} />
      <MobileNav
        isMobileNavOpen={isMobileNavOpen}
        closeMobileNav={closeMobileNav}
      />
    </div>
  );
};

export default ResponsiveNav;
