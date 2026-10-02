type HeadingSectionProps = {
  title_1: string;
  title_2: string;
  description: string;
};
const HeadingSection = ({
  title_1,
  title_2,
  description,
}: HeadingSectionProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-100">
        {title_1}{" "}
        <span className="text-indigo-600 dark:text-[#a78bfa]">{title_2}</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed dark:text-gray-200">
        {description}
      </p>
    </div>
  );
};

export default HeadingSection;
