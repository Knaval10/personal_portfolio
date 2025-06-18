// app/providers.tsx (This file must be a Client Component)
"use client";

import ProjectProvider from "./ProjectProvider";

export default function Store({ children }: { children: React.ReactNode }) {
  return <ProjectProvider>{children}</ProjectProvider>;
}
