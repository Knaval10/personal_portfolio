"use client";

import React from "react";
import ProjectCard, { ProjectProps } from "@/components/Card/ProjectCard";
import Header from "@/components/Header/page";
import { useFetch } from "@/app/lib/useFetch";
import { DEV_PROJECTS } from "@/app/lib/devData";

const Projects = () => {
  const { data: projects } = useFetch<ProjectProps[]>("/api/update-projects", DEV_PROJECTS);

  return (
    <div className="flex flex-col gap-10 p-5 container">
      <Header
        title={"Projects"}
        description={
          "Curious about what I've been working on? Click below to explore a variety of projects that highlight my development journey."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {(projects ?? []).map((project, idx: number) => (
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
