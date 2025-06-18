"use client";

import React, { createContext, useContext, useState } from "react";
interface ProjectContextType {
  projects: string[];
  setProjects: any;
}
const ProjectContext = createContext<ProjectContextType | undefined>(undefined);
const ProjectProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [projects, setProjects] = useState<any | null>(null);
  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;

export function useProject() {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error("useProject must be used within an ProjectProvider");
  }
  return context;
}
