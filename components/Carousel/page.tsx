"use client";

import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RightArrow from "@/app/assets/dynamic/RightArrow";
import LeftArrow from "@/app/assets/dynamic/LeftArrow";

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: false,
    beforeChange: (_: number, next: number) => {
      setCurrentSlide(next);
    },
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "15px",
        },
      },
    ],
  };

  return (
    <div className="mx-auto w-full max-w-7xl p-4 z-[5] flex flex-col gap-4">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>

      {/* Prev - Dots - Next */}
      <div className="flex justify-center items-center gap-4 mt-2">
        <button
          onClick={() => {
            sliderRef?.current?.slickPrev();
          }}
          className="text-gray-400 hover:text-[#00e5ff] transition-colors"
        >
          <LeftArrow />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                sliderRef.current?.slickGoTo(idx);
              }}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                currentSlide === idx
                  ? "bg-[#00e5ff] scale-125 shadow-[0_0_10px_#00e5ff]"
                  : "bg-gray-500 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => {
            sliderRef?.current?.slickNext();
          }}
          className="text-gray-400 hover:text-[#00e5ff] transition-colors"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

