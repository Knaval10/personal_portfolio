"use client";

import Image from "next/image";
import React from "react";
import profilePic from "../assets/image/NabalPP.jpg";
import coverPic from "../assets/image/programming.jpg";
import About from "./about/page";
import Contact from "./contact/page";
import Carousel from "@/components/Carousel/page";
const ProjectData = [
  {
    title: "E-commerce Website Redesign",
    thumbnail: "https://placehold.co/600x400/FF5733/FFFFFF?text=E-commerce",
    link: "https://www.example.com/ecommerce-project",
  },
  {
    title: "Mobile App Development",
    thumbnail: "https://placehold.co/600x400/33FF57/FFFFFF?text=Mobile+App",
    link: "https://www.example.com/mobile-app-project",
  },
  {
    title: "Data Analytics Dashboard",
    thumbnail: "https://placehold.co/600x400/3357FF/FFFFFF?text=Dashboard",
    link: "https://www.example.com/dashboard-project",
  },
  {
    title: "Personal Portfolio Site",
    thumbnail: "https://placehold.co/600x400/F4D03F/000000?text=Portfolio",
    link: "https://www.example.com/portfolio-project",
  },
];
const Home = () => {
  return (
    <main className="flex flex-col gap-20s p-5s">
      <section className="flex flex-col gap-2 relative">
        <div className="relative w-full">
          <figure className="h-[150px]s ">
            <Image
              src={coverPic}
              alt={"cover-picture"}
              className="h-full object-cover"
              loading="lazy"
            />
          </figure>
          <div className="flex justify-center items-center gap-10 absolute inset-0">
            <article className="flex flex-col gap-1 text-white">
              <p>Welcome to my site</p>
              <h1 className="text-4xl font-bold pt-2">Nabal Khadka</h1>
              <p className="text-3xl font-bold">Frontend Developer</p>
            </article>
            <figure className="h-[300px] w-[300px] border-l-2 border-black rounded-bl-[100px]">
              <Image
                src={profilePic}
                alt={"profile-picture"}
                className="h-full w-full rounded-bl-[100px]"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
        <article className="flex flex-col gap-1 self-end absolute bottom-0 right-4">
          <h2>Follow me</h2>
          <div className="flex gap-2 w-10"></div>
        </article>
      </section>
      <section className="flex ">
        <About />
      </section>
      <section className="flex flex-col gap-5 bg-[#B5F9FD] bg-opacity-40 p-5">
        <h2 className="text-2xl text-white font-bold">Featured Projects</h2>
        <Carousel carouselData={ProjectData} />
      </section>
      <section className="flex flex-col gap-5 bg-[#B5F9FD]s bg-opacity-40 p-5">
        <h2 className="text-2xl text-white font-bold">Testimonials</h2>
        <Carousel carouselData={ProjectData} />
      </section>
      <Contact />
    </main>
  );
};

export default Home;
