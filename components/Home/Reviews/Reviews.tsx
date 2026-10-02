"use client";

import HeadingSection from "@/components/Helper/HeadingSection";
import ReviewCarousel from "./ReviewCarousel";

const Reviews = () => {
  return (
    <div
      id="testimonials"
      className="py-16 bg-gray-200 dark:bg-gradient-to-b dark:from-[#0a0a1a] dark:to-[#1a1a2e]"
    >
      <HeadingSection
        title_1="Professional"
        title_2="Endorsements"
        description="Insights from those I’ve worked with"
      />
      <ReviewCarousel />
    </div>
  );
};

export default Reviews;
