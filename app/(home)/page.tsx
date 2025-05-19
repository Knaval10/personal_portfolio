"use client";

import Image from "next/image";
import React, { useState } from "react";
import profilePic from "../assets/image/NabalPP.jpg";
import coverPic from "../assets/image/programming.jpg";
import Tab from "@/components/Tab.tsx/page";
const tabItem = [
  {
    id: 1,
    title: "About",
  },
  {
    id: 2,
    title: "Photo",
  },
  {
    id: 3,
    title: "Video",
  },
  {
    id: 4,
    title: "Projects",
  },
];
const skillSet = [
  {
    id: 1,
    title: "JavaScript",
  },
  {
    id: 2,
    title: "React.Js",
  },
  {
    id: 3,
    title: "Next.Js",
  },
  {
    id: 4,
    title: "Redux",
  },
];
const aboutCategory = [
  {
    id: 1,
    title: "Overview",
  },
  {
    id: 2,
    title: "Place Lived",
  },
  {
    id: 3,
    title: "Contact",
  },
  {
    id: 4,
    title: "Education",
  },
  {
    id: 5,
    title: "Skills",
  },
];
const Home = () => {
  const [selectedItem, setSelectedItem] = useState(tabItem[0]?.id);
  const [activeAbout, setActiveAbout] = useState(aboutCategory[0]?.id);
  return (
    <main className="flex flex-col gap-20 p-5">
      <section className="flex flex-col gap-2">
        <div className="relative w-full">
          <div className="h-[100px]">
            <Image
              src={coverPic}
              alt={"cover-picture"}
              className="h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-centers gap-1 absolute top-1/2 left-[5%]">
            <div className="rounded-full bg-gradient-to-r from-[yellow] via-[pink] to-[red] p-1 w-fit">
              <div className="h-20 w-20 bg-black rounded-full p-0.5">
                <Image
                  src={profilePic}
                  alt={"profile-picture"}
                  className="h-full w-full rounded-full"
                  loading="lazy"
                />
              </div>
            </div>
            <article className="flex flex-col">
              <h1 className="text-centers font-bold">Nabal Khadka</h1>
              <p>Frontend Developer</p>
              <div className="flex items-center gap-1">
                {skillSet?.map((item) => (
                  <div key={item?.id} className="flex items-center gap-1">
                    <span>{item?.title}</span>
                    {item?.id < skillSet?.length ? (
                      <span className="bg-white h-1 w-1 rounded-full"></span>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
        <article className="flex flex-col gap-1 self-end">
          <h2>Follow me</h2>
          <div className="flex gap-2 w-10"></div>
        </article>
      </section>
      <section className="pt-2 w-full">
        <hr className="py-2" />
        <div className="flex flex-col gap-5 w-full">
          <Tab
            tabItem={tabItem}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
          {selectedItem === 1 ? (
            <div className="flex flex-col sm:flex-row gap-5 w-full bg-gray-400 p-2">
              <article className="flex flex-col gap-2 w-full sm:w-1/2">
                <h2>About</h2>
                <div className="flex flex-col gap-1 w-full">
                  {aboutCategory?.map((abt) => (
                    <div
                      key={abt?.id}
                      role="button"
                      onClick={() => setActiveAbout(abt?.id)}
                      className={`px-1 w-full hover:bg-red-300 ${
                        activeAbout === abt?.id ? "bg-blue-300 rounded-lg" : ""
                      }`}
                    >
                      {abt.title}
                    </div>
                  ))}
                </div>
              </article>
              <hr className="flex-1 " />
              <div className="flex flex-col gap-2 w-full sm:w-1/2">
                {activeAbout === 1 ? (
                  <span>My name is Nabal Khadka</span>
                ) : activeAbout === 2 ? (
                  <span>Itahari-18, Sunsari, Nepal</span>
                ) : activeAbout === 3 ? (
                  <span>9811312998</span>
                ) : activeAbout === 4 ? (
                  <span>Computer Engineering</span>
                ) : (
                  <span>Software Developement</span>
                )}
              </div>
            </div>
          ) : selectedItem === 2 ? (
            <div className="border">2</div>
          ) : selectedItem === 3 ? (
            <div className="border">3</div>
          ) : selectedItem === 4 ? (
            <div className="border">4</div>
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default Home;
