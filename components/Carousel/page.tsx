"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from "../Card/ProjectCard";

const Carousel = ({ carouselData }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "10%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="mx-auto w-full max-w-4xls p-4">
      <Slider {...settings}>
        {carouselData?.length > 0 &&
          carouselData.map((item: any, idx: number) => (
            <div key={idx} className="p-2">
              <ProjectCard
                title={item.title}
                thumbnail={item.thumbnail}
                link={item.link}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;
