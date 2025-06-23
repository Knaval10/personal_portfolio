"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../Header/page";
import ReactIcon from "../../app/assets/icons/React.svg";
import JSIcon from "../../app/assets/icons/JS.svg";
import nodeIcon from "../../app/assets/icons/node.svg";
import nextIcon from "../../app/assets/icons/next.svg";
import mongoIcon from "../../app/assets/icons/mongo.svg";
import CSSIcon from "../../app/assets/icons/CSS.svg";
import expressIcon from "../../app/assets/icons/express.svg";
import AIIcon from "../../app/assets/icons/AI.svg";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "React",
    icon: ReactIcon,
  },
  {
    id: 2,
    title: "Next",
    icon: nextIcon,
  },
  {
    id: 3,
    title: "CSS",
    icon: CSSIcon,
  },
  {
    id: 4,
    title: "AI",
    icon: AIIcon,
  },
  {
    id: 5,
    title: "Node",
    icon: nodeIcon,
  },
  {
    id: 6,
    title: "Express",
    icon: expressIcon,
  },
  {
    id: 7,
    title: "Mongodb",
    icon: mongoIcon,
  },
  {
    id: 8,
    title: "JS",
    icon: JSIcon,
  },
];
const Services = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 2000,
    centerMode: false,
    // centerPadding: "10%",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flex flex-col gap-5 p-5">
      <Header
        title={"Services"}
        description={"I can serve you with these tech stacks."}
      />
      <div className="">
        <Slider {...settings}>
          {services?.length > 0 &&
            services.map((service) => (
              <div key={service.id} className="px-5">
                <Image
                  src={service.icon}
                  alt={"tech icons"}
                  width={100}
                  height={100}
                  className="w-32 h-32"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
