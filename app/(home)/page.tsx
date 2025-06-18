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
import ldIcon from "../assets/icons/LinkedIn.svg";
import igIcon from "../assets/icons/Instagram.svg";
import Link from "next/link";
import Header from "@/components/Header/page";
import TestimonyCard from "@/components/Card/TestimonyCard";

const socialMedia = [
  {
    id: 1,
    link: "https://facebook.com",
    icon: fbIcon,
  },
  {
    id: 2,
    link: "https://facebook.com",
    icon: ldIcon,
  },
  {
    id: 3,
    link: "https://facebook.com",
    icon: igIcon,
  },
];

const Home = () => {
  const [showSocial, setShowSocial] = useState(false);
  const [projects, setProjects] = useState<ProjectProps[] | []>([]);
  const [testimonies, setTestimonies] = useState([]);
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
  console.log("test", testimonies);
  const featuredProjects: ProjectProps[] =
    (projects?.length > 0 && projects.slice(0, 4)) || [];
  return (
    <main className="flex flex-col">
      <section
        className="relative h-[800px] bg-cover bg-center w-full before:absolute before:bg-gray-500 before:bg-opacity-60 before:inset-0"
        style={{
          backgroundImage: `url(${coverPic.src || coverPic})`,
        }}
      >
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 absolute inset-0 ">
            <p className="animate-text text-4xl font-bold text-center">
              Welcome to my site
            </p>
            <article className="flex flex-col items-center gap-4 text-white text-center">
              <figure className="h-[300px] w-[300px] border-r-2 border-black rounded-full p-5">
                <Image
                  src={profilePic}
                  alt={"profile-picture"}
                  className="h-full w-full rounded-full"
                  loading="lazy"
                />
              </figure>
              <div className="flex flex-col justify-center gap-2">
                <h1 className="text-4xl font-bold pt-4">Nabal Khadka</h1>
                <p className="text-3xl font-bold">
                  <ColorChangingTextCSS text="Frontend Developer" />
                </p>
              </div>
            </article>
          </div>
          <article className="flex justify-end gap-4 absolute bottom-5 right-5 md:right-10 w-full whitespace-nowrap">
            <button className="self-end hover:bg-[#FF6300] bg-[#ff7f30] px-3 py-2 text-xl font-medium rounded-lg h-fit">
              <a href="">Download CV</a>
            </button>
            <div
              onMouseEnter={() => setShowSocial(true)}
              onMouseLeave={() => setShowSocial(false)}
              className="relative overflow-hidden"
            >
              <div
                className={`rounded-md p-2 shadow-lg flex flex-col gap-2 transition-transform duration-500 ${
                  showSocial
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full"
                }`}
              >
                {socialMedia.map((item) => (
                  <Link key={item.id} href={item.link} target="_blank">
                    <Image src={item.icon} alt="social media" />
                  </Link>
                ))}
              </div>

              <button className=" border z-10 hover:border-[#FF6300] border-[#ff7f30] px-3 py-2 text-xl font-medium rounded-lg relative">
                Follow me
              </button>
            </div>
          </article>
        </div>
      </section>
      <section className="flex">
        <About />
      </section>
      <section className="flex flex-col gap-5 bg-[#2A3A4A] bg-opacity-40 p-5">
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
      </section>
      <section className="flex flex-col gap-5 bg-[#1A2238] bg-opacity-40 p-5">
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
                <TestimonyCard item={item} />
              </div>
            ))}
        </Carousel>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Home;
