"use client";
import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Experience from "./Experience/Experience";
import Reviews from "./Reviews/Reviews";
import ContactUs from "./Contact/ContactUs";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        // offset: 0, // offset (in px) from the original trigger point
        //delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: "ease", // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        // mirror: true, // whether elements should animate out while scrolling past them
        anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
      });
    };

    initAOS();
  }, []);
  return (
    <div className="overflow-hidden" id="home">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Reviews />
      <ContactUs />
    </div>
  );
};

export default Home;
