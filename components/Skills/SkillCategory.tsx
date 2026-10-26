import type { SkillCategory as SkillCategoryType } from "@/lib/skills-data";
import SkillDetailCard from "./SkillDetailCard";

type Props = {
  category: SkillCategoryType;
  index: number;
};

const SkillCategory = ({ category, index }: Props) => {
  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className="
        grid scroll-mt-28
        gap-6 border-b border-gray-200/70
        py-9 last:border-0
        dark:border-white/10
        lg:grid-cols-[220px_minmax(0,1fr)]
        lg:gap-10 lg:py-10
      "
    >
      {/* Category Information */}
      <div data-aos="fade-right" data-aos-duration="700">
        <span
          className="
            font-mono text-sm font-semibold
            tracking-[0.2em]
            text-indigo-600 dark:text-violet-400
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <h2
          id={`${category.id}-heading`}
          className="
            mt-2 text-2xl font-bold tracking-tight
            text-gray-900 dark:text-white
            sm:text-[28px]
          "
        >
          {category.title}
        </h2>

        <p
          className="
            mt-2 max-w-xs text-sm leading-6
            text-gray-600 dark:text-gray-400
          "
        >
          {category.description}
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid min-w-0 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {category.skills.map((skill, skillIndex) => (
          <div
            key={skill.name}
            data-aos="fade-up"
            data-aos-delay={(skillIndex % 3) * 75}
            data-aos-duration="650"
            className="h-full"
          >
            <SkillDetailCard skill={skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillCategory;
