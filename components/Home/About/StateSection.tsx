"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type StatsSectionProps = {
  stats: Array<{ label: string; value: number }>;
};
export default function StatsSection({ stats }: StatsSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // only animate once per load
    threshold: 0.2, // trigger when 20% of section is visible
  });

  return (
    <div ref={ref} className="mt-16 w-[80%] mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 ">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="bg-white dark:bg-[#0f0f1a]/80 shadow rounded-xl p-6 cursor-pointer text-center"
            data-aos="zoom-in-up"
            data-aos-duration="800"
            data-aos-offset="-0.5"
          >
            <div className=" transform transition-transform duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2 dark:text-[#c084fc] dark:drop-shadow-md">
                {inView ? (
                  <CountUp end={stat.value} duration={3} delay={index * 0.1} />
                ) : (
                  stat.value
                )}
                +
              </div>
              <div className="text-sm text-muted-foreground dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
