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
    centerMode: true,
    centerPadding: "10%",
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-autos w-full max-w-4xls p-4 z-[5] flex flex-col gap-4">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>

      {/* Prev - Dots - Next */}
      <div className="flex justify-center items-center gap-4 mt-2">
        <button
          onClick={() => sliderRef?.current?.slickPrev()}
          className="text-gray-400 hover:text-[#0065F2]"
        >
          <LeftArrow />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => sliderRef.current?.slickGoTo(idx)}
              className={`h-3 w-3 rounded-full transition-all ${
                currentSlide === idx
                  ? "bg-[#140125] border-[1.8px] border-gray-400"
                  : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className="text-gray-400 hover:text-[#0065F2]"
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
