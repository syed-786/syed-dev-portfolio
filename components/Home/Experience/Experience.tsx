import React from "react";
import HeadingSection from "@/components/Helper/HeadingSection";
import { experiences } from "../../../lib/data";
import { Briefcase, GraduationCap } from "lucide-react";
import ExpandableText from "@/components/Helper/ExpendableText";

const Experience = () => {
  return (
    <div
      id="experience"
      className="py-16 bg-gray-300 dark:bg-gradient-to-b dark:from-[#120a1a] dark:via-[#1a102d] dark:to-[#291a40] 
      dark:text-gray-200"
    >
      <HeadingSection
        title_1="Experience &"
        title_2="Education"
        description="My professional journey and academic background"
      />

      <div className="relative px-6 max-w-4xl mx-auto">
        {/* timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400 to-blue-900 md:translate-x-px"></div>
        {experiences.map((item, index) => {
          return (
            <div
              key={index}
              // data-aos={index % 2 === 0 ? "zoom-in-left" : "zoom-in-right"}
              data-aos="zoom-in-up"
              // data-aos-duration="600"
              data-aos-delay={index * 100}
              data-aos-anchor-placement="top-bottom"
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* timeline node */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center z-10">
                {item.type === "work" ? (
                  <Briefcase className="w-4 h-4 text-blue-500" />
                ) : (
                  <GraduationCap className="w-4 h-4 text-blue-500" />
                )}
              </div>

              {/* Content */}
              <div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
                <div className="bg-white dark:bg-[#0f0f1a]/120 dark:shadow-[0_0_15px_rgba(26,13,38,0.6)] shadow-md rounded-xl p-6 hover:scale-105 transition-all duration-300 dark:hover:shadow-[0_0_12px_rgba(109,40,217,0.6)]">
                  <div className="flex items-center gap-2 text-sm text-blue-500 mb-2 dark:text-violet-400">
                    <span className="px-3 py-1 rounded-full bg-blue-600/10 dark:bg-violet-600/10 font-medium">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2 font-medium dark:text-violet-400 italic ">
                    {item.company}
                  </p>
                  <ExpandableText text={item.description} wordLimit={20} />
                  {/* <p className="text-muted-foreground text-sm mb-4">
                    <ExpandableText text={item.description} maxLines={3} />
                  </p> */}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => {
                      return (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-md bg-indigo-500 dark:bg-violet-700/60 text-white"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
