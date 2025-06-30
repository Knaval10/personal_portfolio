"use client";

import Header from "@/components/Header/page";
import React, { useEffect, useState } from "react";
export interface SkillsType {
  skill: string;
  proficiency: string;
}
const Skills = () => {
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
  return (
    <div className="flex flex-col gap-10">
      <Header
        title={"Skills"}
        description={
          "A comprehensive overview of the technical skills and tools I’ve mastered to build efficient and scalable frontend applications."
        }
      />
      <div className="flex flex-col justify-center  gap-4 container p-5 text-white">
        {skills.length > 0 &&
          skills.map((skill, idx: number) => (
            <article key={idx} className="flex items-center gap-5">
              <h2 className="w-1/4">{skill.skill}</h2>
              <div className="h-2 bg-white w-3/4 rounded-lg">
                <div
                  className="animate-bg h-full rounded-lg"
                  style={{ width: skill.proficiency }}
                />
              </div>
            </article>
          ))}
      </div>
    </div>
  );
};

export default Skills;
