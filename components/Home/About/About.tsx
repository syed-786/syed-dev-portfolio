import HeadingSection from "@/components/Helper/HeadingSection";
import React from "react";
import Image from "next/image";
import { highlights, stats } from "../../../lib/data";
import StatsSection from "./StateSection";

const About = () => {
  return (
    <div
      id="about"
      className="py-16 bg-gray-100  dark:bg-gradient-to-b dark:from-[#0a0a12] dark:via-[#1a102d] dark:to-[#291a40] dark:text-gray-200 "
    >
      <HeadingSection
        title_1="About"
        title_2="Me"
        description="Get to know the developer bethind the code"
      />

      <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div
          className="relative"
          data-aos="fade-right"
          // data-aos-delay="0"
          //   data-aos-anchor-placement="center-bottom"
          //   data-aos-offset="-0.09"
        >
          <div className="aspect-square rounded-2xl overflow-hidden p-2 shadow-lg">
            <Image
              src="/images/Syed.jpg"
              alt="profile"
              width={700}
              height={700}
              className="w-full h-full object-cover object-top rounded-xl"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div
          className="space-y-4"
          data-aos="fade-left"
          //   data-aos-delay="50"
          data-aos-anchor-placement="top-center"
        >
          <h3 className="text-xl font-semibold dark:text-gray-200 ">
            A passionate developer who loves to explore, learn & create
          </h3>
          <p className="text-muted-foreground leading-relaxed dark:text-gray-300 text-md">
            I’m a Full Stack Developer who enjoys turning ideas into
            experiences. Over the past 8 years, I’ve worked across the different
            stacks to build modern web apps that are scalable, performant, and
            built to evolve. My journey has taken me from shaping polished user
            experiences to architecting the systems and logic that power them. I
            enjoy connecting the dots between thoughtful design, clean
            architecture, and robust engineering.
          </p>
          <p className="text-muted-foreground leading-relaxed dark:text-gray-300 text-md">
            For me, development is more than writing code. It’s about
            understanding the problem, questioning the obvious, exploring with
            new ideas. Lately, I’ve been exploring and experimenting with AI,
            learning not just how the technology works, but also how to use it
            effectively in everyday development and life.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((item) => {
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 dark:text-[#fef9c3] text-blue-500" />
                  </div>
                  <span className="text-muted-foreground dark:text-gray-300">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats */}
      <StatsSection stats={stats} />

      {/* Stats */}
      {/* <div className="mt-16 w-[80%] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            return (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-800 shadow rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div> */}

      {/* <div className="grid w-[80%] mx-auto lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-square rounded-2xl overflow-hidden p-2">
            <Image
              src="/images/Syed.jpg"
              alt="profile"
              width={700}
              height={700}
              className="w-full h-full object-center rounded-xl"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
