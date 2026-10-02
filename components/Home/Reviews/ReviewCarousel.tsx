import React from "react";
import "react-multi-carousel/lib/styles.css";
import reviews from "@/Constant/Reviews.json";
import Image from "next/image";
import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 3 },
  desktop: { breakpoint: { max: 1280, min: 1024 }, items: 2 },
  tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
  mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
};

const ReviewCarousel = () => {
  return (
    <>
      <div className="w-[90%] mx-auto mt-10" data-aos="fade-up">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          showDots
          arrows={true}
          swipeable={true}
          draggable={true}
          transitionDuration={600}
          customTransition="transform 400ms ease-in-out"
          dotListClass="custom-dot-list"
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-[#0f0f1a]/120 shadow-lg rounded-xl p-6 mx-3 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 h-full min-h-[320px]"
            >
              <Image
                src={review.image}
                alt={review.name}
                width={80}
                height={80}
                className="rounded-full mb-4 border-2 border-indigo-400 dark:border-yellow-300"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                {review.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {review.role}
              </p>
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed flex-grow">
                "{review.text}"
              </p>
            </div>
          ))}
        </Carousel>
      </div>

      <style jsx global>{`
        .custom-dot-list {
          display: flex !important;
          justify-content: center;
          margin-top: 2rem;
        }
        .custom-dot-list li button {
          border-radius: 50%;
          width: 10px;
          height: 10px;
          margin: 0 5px;
          background: #d1d5db; /* light mode gray */
          transition: all 0.3s ease;
        }
        .dark .custom-dot-list li button {
          background: #6d28d9; /* violet glow */
          box-shadow: 0 0 6px #facc15; /* golden star glow */
        }
        .custom-dot-list li.react-multi-carousel-dot--active button {
          background: #2563eb; /* active blue in light mode */
        }
        .dark .custom-dot-list li.react-multi-carousel-dot--active button {
          background: #facc15; /* golden active dot in dark mode */
          box-shadow: 0 0 8px #facc15;
        }
      `}</style>
    </>
  );
};

export default ReviewCarousel;
