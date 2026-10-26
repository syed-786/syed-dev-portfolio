import { skillIconColors, type Skill } from "@/lib/skills-data";

type Props = {
  skill: Skill;
};

const SkillDetailCard = ({ skill }: Props) => {
  const Icon = skill.icon;
  const iconColor = skillIconColors[skill.name];
  return (
    <article
      className="
        group flex h-full min-w-0 items-start gap-3
        rounded-2xl border border-gray-200/80
        bg-white p-4 shadow-sm
        transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-md
        dark:border-white/10
        dark:bg-[#150f20]
        dark:hover:border-violet-500/30
        dark:hover:shadow-[0_0_20px_rgba(109,40,217,0.12)]
        cursor-pointer
      "
    >
      {/* Technology Icon */}
      <div
        className="
        flex h-12 w-12 shrink-0 items-center justify-center
        rounded-xl border border-indigo-100
        bg-indigo-50 text-indigo-600
        transition-colors duration-300
        group-hover:bg-indigo-100
        dark:border-violet-500/20
        dark:bg-violet-500/10
        dark:text-violet-300
        dark:group-hover:bg-violet-500/20
        "
      >
        <Icon
          className="h-6 w-6"
          style={iconColor ? { color: iconColor } : undefined}
          aria-hidden="true"
        />
      </div>

      {/* Technology Name and Description */}
      <div className="min-w-0 flex-1">
        <h3
          className="
            text-base font-semibold leading-6
            text-gray-900 dark:text-gray-100
          "
        >
          {skill.name}
        </h3>

        <p
          className="
            mt-1.5 text-[13px] leading-5
            text-gray-600 dark:text-gray-400
          "
        >
          {skill.description}
        </p>
      </div>
    </article>
  );
};

export default SkillDetailCard;
