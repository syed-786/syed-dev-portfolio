"use client";
import React from "react";
import Tilt from "react-parallax-tilt";
type Props = {
  name: string;
  icon: React.ElementType;
};

const SkillCard = ({ name, icon: Icon }: Props) => {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      transitionSpeed={400}
      scale={1.05}
      gyroscope={true}
      glareEnable={true} // adds a light glare effect
      glareMaxOpacity={0.7} // subtle glare
      glareColor="rgba(109,40,217,0.4)" // violet glow
      glarePosition="all" // glare follows tilt
      className="w-full"
    >
      <div
        className="group relative bg-white dark:bg-[#150f20] shadow-md rounded-xl p-4 
      flex flex-col items-center gap-3 cursor-pointer 
      transition-transform duration-300 
      hover:scale-110 
      
     "
      >
        {/* Icon container */}
        <div
          className="w-12 h-12 rounded-lg 
        bg-gradient-to-br from-purple-400 to-blue-600 
        flex items-center justify-center 
        group-hover:from-purple-300 group-hover:to-blue-800 
        transition duration-300 
        dark:from-violet-600 dark:to-indigo-700 
        dark:group-hover:from-violet-500 dark:group-hover:to-indigo-800"
        >
          {name === "ChatGPT" ? (
            <svg
              className="w-11 h-11"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://w3.org"
            >
              <path
                fill="#FFFFFF"
                d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.9807 5.9807 0 0 0 .5157 4.9103 6.0451 6.0451 0 0 0 6.5098 2.9 6.0651 6.0651 0 0 0 10.2865-2.291 5.9807 5.9807 0 0 0 3.9971-2.9002 6.0462 6.0462 0 0 0-.7421-7.0964z"
              />
            </svg>
          ) : (
            <Icon className="w-6 h-6 text-white" />
          )}
        </div>

        {/* Label */}
        <span className="text-sm font-medium text-foreground dark:text-gray-200">
          {name}
        </span>
      </div>
    </Tilt>
  );
};

export default SkillCard;

// import { LucideIcon } from "lucide-react";
// import React from "react";

// type Props = {
//   name: string;
//   icon: LucideIcon;
// };
// const SkillCard = ({ name, icon: Icon }: Props) => {
//   return (
//     <div className="group relative bg-white dark:bg-purple-950 shadow-md rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer hover:scale-105 transition-all duration-300">
//       <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-blue-600 flex items-center justify-center group-hover:from-purple-300 group-hover:to-blue-800 transition duration-300">
//         <Icon className="w-6 h-6 text-white" />
//       </div>
//       <span className="text-sm font-medium text-foreground">{name}</span>
//     </div>
//   );
// };

// export default SkillCard;
