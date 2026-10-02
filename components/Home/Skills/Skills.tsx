"use client";

import { skillCategories } from "@/lib/data";
import HeadingSection from "@/components/Helper/HeadingSection";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div id="skills" className="py-16 bg-gray-50 dark:bg-gray-950">
      <HeadingSection
        title_1="Technical"
        title_2="Skills"
        description="Technologies I use to build, solve, and bring ideas to life"
      />
      <div className="space-y-12 w-[80%] mx-auto">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-600"></span>
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                  data-aos-anchor-placement="top-bottom"
                  // data-aos-offset="-0.01"
                >
                  <SkillCard key={index} name={skill.name} icon={skill.icon} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

// import React from "react";
// import { skillCategories } from "@/data";
// import HeadingSection from "@/components/Helper/HeadingSection";
// import SkillCard from "./SkillCard";
// const Skills = () => {
//   return (
//     <div className="py-16 bg-gray-100 dark:bg-gray-950">
//       <HeadingSection
//         title_1="Technical"
//         title_2="Skills"
//         description="Technologies I've been working with recently"
//       />
//       <div className="space-y-12 w-[80%] mx-auto">
//         {skillCategories.map((category) => {
//           return (
//             <div key={category.title}>
//               <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
//                 <span className="w-2 h-2 rounded-full bg-purple-600"></span>
//                 {category.title}
//               </h3>
//               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
//                 {category.skills.map((skill, index) => {
//                   return (
//                     <div key={index}>
//                       <SkillCard name={skill.name} icon={skill.icon} />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Skills;
