"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import profilePic from "../assets/image/NabalPP.jpg";
import coverPic from "../assets/image/programming.jpg";
import About from "./about/page";
import Contact from "./contact/page";
import Carousel from "@/components/Carousel/page";
import ProjectCard, { ProjectProps } from "@/components/Card/ProjectCard";
import ColorChangingTextCSS from "@/components/Animation/ColorChangingTextCSS";
import fbIcon from "../assets/icons/Facebook.svg";
import ldIcon from "../assets/icons/Linkedin.svg";
import ghIcon from "../assets/icons/Github.svg";
import Link from "next/link";
import Header from "@/components/Header/page";
import TestimonyCard, { ItemType } from "@/components/Card/TestimonyCard";
import Galaxy from "../assets/image/Galaxy.png";
import Diamond from "../assets/image/Diamond.png";
import planets from "../assets/image/Planets.png";
import Kohinoor from "../assets/image/Kohinoor.png";
import TestimonyPopup from "@/components/Modal/TestimonyPopup";
import LeftArrow from "../assets/dynamic/LeftArrow";
import RightArrow from "../assets/dynamic/RightArrow";
import CrossIcon from "../assets/dynamic/CrossIcon";
import Services from "@/components/Services/Services";
import Ellipse from "../../app/assets/icons/Ellipse.svg";
import DownArrow from "../../app/assets/icons/ArrowDown.svg";

const socialMedia = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/nabal-khadka-4b6b96238/",
    icon: ldIcon,
  },
  // {
  //   id: 3,
  //   link: "https://facebook.com",
  //   icon: igIcon,
  // },
  {
    id: 2,
    link: "https://github.com/Knaval10",
    icon: ghIcon,
  },
  {
    id: 3,
    link: "https://www.facebook.com/nabal.khadka.94",
    icon: fbIcon,
  },
];

interface FileType {
  filename: string;
  url: string;
}

const Home = () => {
  const [showSocial, setShowSocial] = useState(false);
  const [projects, setProjects] = useState<ProjectProps[] | []>([]);
  const [testimonies, setTestimonies] = useState<ItemType[]>([]);
  const [file, setFile] = useState<FileType>();
  const [selectedTestimony, setSelectedTestimony] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("right");

  const handleModal = (id: number) => {
    setShowModal((prev) => !prev);
    setSelectedTestimony(id);
    scrollTo(0, 0);
  };
  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const response = await fetch("/api/update-projects");
        const data: ProjectProps[] = await response.json();
        setProjects(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchProjectsData();
  }, []);
  useEffect(() => {
    const fetchTestimonyData = async () => {
      try {
        const response = await fetch("/api/update-testimonials");
        const data = await response.json();
        setTestimonies(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchTestimonyData();
  }, []);
  useEffect(() => {
    const fetchFileData = async () => {
      try {
        const response = await fetch("/api/update-document");
        const data: FileType = await response.json();
        setFile(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchFileData();
  }, []);

  useEffect(() => {
    if (selectedTestimony > 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedTestimony]);

  const featuredProjects: ProjectProps[] =
    (projects?.length > 0 && projects.slice(0, 4)) || [];
  return (
    <main className="flex flex-col gap-8 -mt-[97px]">
      <section
        className="relative h-[800px] bg-cover bg-center w-full before:absolute before:bg-gray-500 before:bg-opacity-60 before:inset-0"
        style={{
          backgroundImage: `url(${coverPic.src || coverPic})`,
        }}
      >
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-8 absolute inset-0 ">
            <article className="flex flex-col items-center gap-1 text-white text-center">
              <figure className="h-[300px] w-[300px] border-r-2 border-black rounded-full p-5 mb-3">
                <Image
                  src={profilePic}
                  alt={"profile-picture"}
                  className="h-full w-full rounded-full"
                  loading="lazy"
                />
              </figure>
              <div className="flex flex-col justify-center gap-2">
                <h1 className="text-3xl font-bold pt-4">Nabal Khadka</h1>
                <p className="text-3xl font-bold">
                  <ColorChangingTextCSS text="Frontend Developer" />
                </p>
              </div>
              <p className="animate-text text-base font-semibold italic text-[#200225]">
                Bringing design to life through code.
              </p>
            </article>
            <article className="flex flex-col md:hidden items-center text-center gap-3">
              <h2 className="text-white text-sm font-semibold leading-4">
                Want to know more?
              </h2>
              <figure className="w-8 h-8 animate-bounce">
                <Image
                  src={DownArrow}
                  alt={"scroll down"}
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </figure>
            </article>
          </div>
          <article className="flex justify-end gap-4 absolute bottom-5 right-5 md:right-10 w-full whitespace-nowrap">
            <button className="self-end hover:bg-gradient-to-r hover:to-[#C961DE] hover:from-[#2954A3] bg-gradient-to-r from-[#C961DE] to-[#2954A3]  px-3 py-2 rounded-lg h-fit">
              <a
                download={file?.filename}
                href={file?.url}
                target="_blank"
                className="text-sm text-white font-semibold"
              >
                Download CV
              </a>
            </button>
            <div
              onMouseEnter={() => setShowSocial(true)}
              onMouseLeave={() => setShowSocial(false)}
              className="relative overflow-hidden z-[5] "
            >
              <div
                className={`bg-[#0F103F] rounded-md p-2 shadow-lg flex flex-col items-center gap-2 transition-transform duration-500 border border-white  ${
                  showSocial
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full"
                }`}
              >
                {socialMedia.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    target="_blank"
                    className="border border-white rounded-full"
                  >
                    <Image
                      src={item.icon}
                      alt="social media"
                      className="w-8 h-8"
                    />
                  </Link>
                ))}
              </div>
              <button className="text-sm text-white font-semibold border z-10 border-[#C961DE] hover:border-[#2954A3] px-3 py-2 rounded-lg relative">
                Follow me
              </button>
            </div>
          </article>
        </div>
      </section>
      <section className="flex relative">
        <About />
        <div className="absolute -left-10 -top-10 w-[30%] md:full">
          <Image src={Kohinoor} alt={""} />
        </div>
        <div className="absolute right-2 -bottom-20 lg:-bottom-40 ">
          <Image src={Galaxy} alt={""} />
        </div>
      </section>
      <section className="flex flex-col gap-5  p-5 relative z-[5] ">
        <Header
          title={"Featured Projects"}
          description={"View the best projects from my shelf"}
        />
        <Carousel>
          {featuredProjects?.length > 0 &&
            featuredProjects.map((item, idx: number) => (
              <div key={idx} className="p-2 w-full">
                <ProjectCard
                  title={item.title}
                  thumbnail={item.thumbnail}
                  link={item.link}
                  stacks={item.stacks}
                  description={item.description}
                />
              </div>
            ))}
        </Carousel>
        <div className="absolute -bottom-20 lg:-bottom-1/3 -left-[18%] 2xl:-left-[10%] lg:w-[60%]">
          <Image src={Diamond} alt={""} />
        </div>
      </section>
      <section className="relative z-[5]">
        <Services />
        <div className="block absolute top-28 inset-0 min-[480px]:top-16 sm:top-12">
          <Image
            src={Ellipse}
            alt={"ellipse"}
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      </section>
      <section className="flex flex-col gap-5 p-5 z-[5] relative">
        <Header
          title={"Testimonials"}
          description={
            "Discover what my seniors and stakeholders have to say about me."
          }
        />
        <Carousel>
          {testimonies?.length > 0 &&
            testimonies.map((item, idx: number) => (
              <div key={idx} className="p-2 w-full">
                <TestimonyCard
                  item={item}
                  handleClick={() => handleModal(item?.id)}
                />
              </div>
            ))}
        </Carousel>
        <div className="absolute -bottom-1/4 right-0 ">
          <Image src={planets} alt={"planets"} />
        </div>
      </section>
      <section id="contact" className="z-[5]">
        <Contact />
      </section>
      {showModal ? (
        <div className="flex items-center z-[100] absolute inset-0 top-0 backdrop-blur-3xl ">
          {testimonies?.length > 0 && (
            <div className="flex items-center justify-center gap-5 container rounded-xl bg-[#0F103F] bg-opacity-40  h-[80vh] sm:h-[70vh] md:w-1/2 p-2 sm:p-5 md:p-10 relative">
              <section
                onClick={() => {
                  setShowModal(false);
                  setSelectedTestimony(0);
                }}
                className="absolute top-3 right-5 text-white hover:text-gray-700 hover:bg-white border border-white p-1 cursor-pointer rounded-lg "
              >
                <CrossIcon className="w-4 h-4" />
              </section>
              <button
                onClick={() => {
                  setSelectedTestimony(selectedTestimony - 1);
                  setAnimationDirection("left");
                }}
                disabled={selectedTestimony === 1}
                className="disabled:cursor-not-allowed hover:text-[#0065F2] text-white disabled:hover:text-gray-400 "
              >
                <LeftArrow />
              </button>
              <div className="overflow-hidden w-full flex justify-center items-center">
                <div
                  key={selectedTestimony}
                  className={`${
                    animationDirection === "right"
                      ? "animate-slide-right"
                      : "animate-slide-left"
                  }`}
                >
                  <TestimonyPopup item={testimonies[selectedTestimony - 1]} />
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedTestimony(selectedTestimony + 1);
                  setAnimationDirection("right");
                }}
                disabled={selectedTestimony === testimonies?.length}
                className="disabled:cursor-not-allowed hover:text-[#0065F2] text-white disabled:hover:text-gray-400"
              >
                <RightArrow />
              </button>
            </div>
          )}
        </div>
      ) : null}
    </main>
  );
};

export default Home;
