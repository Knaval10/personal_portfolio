"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import profilePic from "../../assets/image/NabalPP.jpg";
import Header from "@/components/Header/page";
import { SkillsType } from "../skills/page";
interface AboutItem {
  id: number;
  content: string;
  image: string;
}

const About: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [skills, setSkills] = useState<SkillsType[] | []>([]);
  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await fetch("/api/update-skills");
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchSkillsData();
  }, []);
  const featuredSkills = (skills?.length > 0 && skills.slice(0, 4)) || [];
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(`api/update-about`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: AboutItem = await response.json();
        setAboutData(data);
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <main className="flex flex-col gap-10 p-5 container z-[5]">
      <Header
        title={"About Me"}
        description={
          "Discover who I am, what drives me, and my top skills as a frontend developer."
        }
      />
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 text-white">
        <figure className="h-[300px] w-[300px] md:self-start border-l-2 border-black rounded-bl-[100px]">
          <Image
            src={aboutData?.image ? aboutData?.image : profilePic}
            alt={"profile-picture"}
            width={100}
            height={100}
            className="h-full w-full rounded-bl-[100px] object-cover"
            loading="lazy"
          />
        </figure>
        <div className="md:w-1/2 flex flex-col justify-center gap-4 h-full">
          {aboutData ? (
            <p className="text-white">{aboutData?.content}</p>
          ) : (
            <p>No about information available.</p>
          )}
          <div className="flex flex-col justify-center gap-4 ">
            {featuredSkills?.length > 0 &&
              featuredSkills.map((skill, idx: number) => (
                <article
                  key={idx}
                  className="flex flex-col min-[470px]:flex-row min-[470px]:items-center gap-2 min-[470px]:gap-5"
                >
                  <h2 className="min-[470px]:w-1/4">{skill.skill}</h2>
                  <div className="h-2 bg-white min-[470px]:w-3/4 rounded-lg">
                    <div
                      className="h-full rounded-lg animate-bg"
                      style={{ width: skill.proficiency }}
                    />
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
