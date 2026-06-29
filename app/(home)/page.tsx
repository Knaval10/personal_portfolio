"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import profilePic from "../assets/image/NabalPP.png";
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
import TestimonyPopup from "@/components/Modal/TestimonyPopup";
import LeftArrow from "../assets/dynamic/LeftArrow";
import RightArrow from "../assets/dynamic/RightArrow";
import CrossIcon from "../assets/dynamic/CrossIcon";
import Services from "@/components/Services/Services";
import { useFetch } from "@/app/lib/useFetch";
import { DEV_PROJECTS, DEV_TESTIMONIALS, DEV_DOCUMENT } from "@/app/lib/devData";

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
  const [selectedTestimony, setSelectedTestimony] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const [animationDirection, setAnimationDirection] = useState<"left" | "right">("right");

  // Data fetching — uses dev fallbacks in development, real APIs in production
  const { data: projects } = useFetch<ProjectProps[]>("/api/update-projects", DEV_PROJECTS);
  const { data: testimonies } = useFetch<ItemType[]>("/api/update-testimonials", DEV_TESTIMONIALS);
  const { data: file } = useFetch<FileType>("/api/update-document", DEV_DOCUMENT);

  const handleModal = (id: number) => {
    setShowModal(true);
    setSelectedTestimony(id);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const featuredProjects: ProjectProps[] = (projects ?? []).slice(0, 4);
  return (
    <main className="flex flex-col gap-8 -mt-[97px] relative">
      {/* ── Hero Section ── */}
      <section className="relative min-h-[calc(100vh-97px)] w-full flex flex-col justify-center items-center pt-[110px] sm:pt-[120px] pb-16 z-10 container mx-auto px-6 md:px-12">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Profile Avatar Column: Placed FIRST on smaller screens (order-1), SECOND on large screens (lg:order-2 lg:col-span-5) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-center z-10 relative pt-2 lg:pt-0">
            <div className="relative">
              {/* Profile Avatar — Rounded clean crop floating on animated background */}
              <figure className="relative h-[240px] w-[240px] sm:h-[290px] sm:w-[290px] md:h-[340px] md:w-[340px] rounded-full overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src={profilePic}
                  alt={"Nabal Khadka Profile"}
                  className="h-full w-full rounded-full object-cover"
                  priority
                />
              </figure>

              {/* Floating Stat Badge 1: Experience */}
              <div className="absolute -bottom-2 -left-3 sm:bottom-2 sm:-left-6 bg-black/60 border border-cyan-500/30 backdrop-blur-xl px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20">
                <span className="text-xl sm:text-2xl">⚡</span>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] sm:text-xs text-gray-400 font-medium">Experience</span>
                  <span className="text-xs sm:text-sm font-bold text-white">3+ Years</span>
                </div>
              </div>

              {/* Floating Stat Badge 2: Projects */}
              <div className="absolute -top-2 -right-3 sm:top-2 sm:-right-6 bg-black/60 border border-purple-500/30 backdrop-blur-xl px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20">
                <span className="text-xl sm:text-2xl">🚀</span>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] sm:text-xs text-gray-400 font-medium">Completed</span>
                  <span className="text-xs sm:text-sm font-bold text-white">15+ Projects</span>
                </div>
              </div>
            </div>
          </div>

          {/* Typography & CTAs Column: Placed SECOND on smaller screens (order-2), FIRST on large screens (lg:order-1 lg:col-span-7) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 z-10">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium backdrop-blur-md shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for New Opportunities
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-300">
                Hi there, I&apos;m <span className="text-white font-bold drop-shadow-[0_0_12px_rgba(160,100,255,0.8)]">Nabal Khadka</span> 👋
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                <ColorChangingTextCSS text="Frontend Developer" />
              </h1>
            </div>

            {/* Rich Bio Summary */}
            <p className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed font-normal">
              Passionate engineer crafting modern web applications with <strong className="text-cyan-300 font-semibold">React, Next.js, and TypeScript</strong>. Dedicated to building performant, responsive architectures with pixel-perfect interactive UI designs.
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Prisma"].map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs font-mono font-medium bg-white/5 border border-white/10 rounded-md text-gray-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs & Social Links Group */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                Let&apos;s Connect
              </a>

              {file?.url && (
                <a
                  download={file?.filename}
                  href={file?.url}
                  target="_blank"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-md transition-all transform hover:-translate-y-0.5"
                >
                  Download CV
                </a>
              )}

              {/* Inline Social Icons */}
              <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-white/10">
                {socialMedia.map((item) => (
                  <Link key={item.id} href={item.link} target="_blank" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400 hover:scale-110 transition-all">
                    <Image src={item.icon} alt="social media" className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── About Section ── */}
      <section className="flex relative z-10">
        <About />
      </section>

      {/* ── Featured Projects ── */}
      <section className="flex flex-col gap-5 p-5 relative z-10">
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

      {/* ── Services / Tech Stack ── */}
      <section className="relative z-10">
        <Services />
      </section>

      {/* ── Testimonials ── */}
      <section className="flex flex-col gap-5 p-5 z-10 relative">
        <Header
          title={"Testimonials"}
          description={
            "Discover what my seniors and stakeholders have to say about me."
          }
        />
        <Carousel>
          {(testimonies?.length ?? 0) > 0 &&
            testimonies!.map((item, idx: number) => (
              <div key={idx} className="p-2 w-full">
                <TestimonyCard
                  item={item}
                  handleClick={() => handleModal(item?.id)}
                />
              </div>
            ))}
        </Carousel>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="z-10">
        <Contact />
      </section>

      {/* ── Testimony Modal ── */}
      {showModal ? (
        <div 
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowModal(false);
              setSelectedTestimony(0);
            }
          }}
        >
          {(testimonies?.length ?? 0) > 0 && (
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
                  <TestimonyPopup item={testimonies![selectedTestimony - 1]} />
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedTestimony(selectedTestimony + 1);
                  setAnimationDirection("right");
                }}
                disabled={selectedTestimony === (testimonies?.length ?? 0)}
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

