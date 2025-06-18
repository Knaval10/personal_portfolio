"use client";

import React, { useEffect, useState } from "react";
import ProjectCard, { ProjectProps } from "@/components/Card/ProjectCard";
import Header from "@/components/Header/page";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectProps[] | []>([]);
  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const response = await fetch("/api/update-projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchProjectsData();
  }, []);
  return (
    <div className="flex flex-col gap-10 p-5 container">
      <Header
        title={"Projects"}
        description={
          "Curious about what I’ve been working on? Click below to explore a variety of projects that highlight my development journey."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 ">
        {projects?.length > 0 &&
          projects.map((project, idx: number) => (
            <ProjectCard
              key={idx}
              title={project.title}
              thumbnail={project.thumbnail}
              link={project.link}
              stacks={project.stacks}
              description={project.description}
            />
          ))}
      </div>
    </div>
  );
};

export default Projects;
