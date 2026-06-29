/**
 * devData.ts
 * Static dummy data used ONLY in development (process.env.NODE_ENV === 'development').
 * Production always uses live API data.
 */

import type { ProjectProps } from "@/components/Card/ProjectCard";
import type { ItemType } from "@/components/Card/TestimonyCard";
import type { QualificationType } from "@/components/TimeLine/TimeLine";
import type { SkillsType } from "@/app/(home)/skills/page";

/* ── About ─────────────────────────────────────────────────────── */
export const DEV_ABOUT = {
  id: 1,
  image: "",
  content:
    "I'm Nabal Khadka, a passionate Frontend Developer with 3+ years of experience building responsive, performant, and accessible web applications. I specialise in React and Next.js ecosystems, crafting seamless user experiences with clean, maintainable code. When I'm not coding I enjoy hiking and exploring open-source projects.",
};

/* ── Skills ─────────────────────────────────────────────────────── */
export const DEV_SKILLS: SkillsType[] = [
  { skill: "React.js", proficiency: "90%" },
  { skill: "Next.js", proficiency: "85%" },
  { skill: "TypeScript", proficiency: "80%" },
  { skill: "Tailwind CSS", proficiency: "88%" },
  { skill: "Node.js", proficiency: "70%" },
  { skill: "PostgreSQL", proficiency: "65%" },
  { skill: "GraphQL", proficiency: "60%" },
  { skill: "Docker", proficiency: "55%" },
];

/* ── Projects ───────────────────────────────────────────────────── */
export const DEV_PROJECTS: ProjectProps[] = [
  {
    title: "Portfolio v2",
    description: "Personal portfolio built with Next.js 15 and Tailwind CSS.",
    thumbnail: "https://picsum.photos/seed/proj1/800/500",
    link: "https://github.com",
    stacks: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with cart, auth, and Stripe payments.",
    thumbnail: "https://picsum.photos/seed/proj2/800/500",
    link: "https://github.com",
    stacks: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "GeoSpatial Dashboard",
    description: "Interactive map dashboard using MapLibre GL and PMTiles.",
    thumbnail: "https://picsum.photos/seed/proj3/800/500",
    link: "https://github.com",
    stacks: ["React", "MapLibre", "PMTiles"],
  },
  {
    title: "Clinic Connect",
    description: "Dental clinic appointment booking system.",
    thumbnail: "https://picsum.photos/seed/proj4/800/500",
    link: "https://github.com",
    stacks: ["Next.js", "Prisma", "PostgreSQL"],
  },
  {
    title: "AI Chat Assistant",
    description: "Real-time AI conversational client integrated with LLM APIs.",
    thumbnail: "https://picsum.photos/seed/proj5/800/500",
    link: "https://github.com",
    stacks: ["React", "TypeScript", "OpenAI"],
  },
  {
    title: "Task Management Suite",
    description: "Collaborative Kanban workspace with real-time web sockets.",
    thumbnail: "https://picsum.photos/seed/proj6/800/500",
    link: "https://github.com",
    stacks: ["Next.js", "Socket.io", "Tailwind"],
  },
];

/* ── Education & Experience ─────────────────────────────────────── */
export const DEV_EDUCATION: QualificationType[] = [
  {
    id: 1,
    title: "B.Sc. Computer Science",
    date: "2017 – 2021",
    institute: "Tribhuvan University",
    keycourse: ["Data Structures", "Algorithms", "Database Systems"],
  },
  {
    id: 2,
    title: "+2 Science",
    date: "2015 – 2017",
    institute: "Kathmandu Valley College",
    keycourse: ["Physics", "Mathematics", "Computer Science"],
  },
];

export const DEV_EXPERIENCE: QualificationType[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    date: "2023 – Present",
    institute: "Tech Innovations Pvt. Ltd.",
    keycourse: ["React", "Next.js", "TypeScript", "Team Lead"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    date: "2021 – 2023",
    institute: "Digital Solutions Nepal",
    keycourse: ["React", "Redux", "REST APIs"],
  },
  {
    id: 3,
    title: "Junior Web Developer",
    date: "2020 – 2021",
    institute: "Freelance",
    keycourse: ["HTML", "CSS", "JavaScript"],
  },
];

/* ── Testimonials ───────────────────────────────────────────────── */
export const DEV_TESTIMONIALS: ItemType[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    designation: "CTO, Tech Innovations Pvt. Ltd.",
    image: "https://i.pravatar.cc/150?img=1",
    testimony:
      "Nabal consistently delivers high-quality frontend code and is always willing to go the extra mile. His attention to detail and ability to translate designs into pixel-perfect implementations is outstanding.",
  },
  {
    id: 2,
    name: "Priya Thapa",
    designation: "Product Manager, Digital Solutions Nepal",
    image: "https://i.pravatar.cc/150?img=5",
    testimony:
      "Working with Nabal was a pleasure. He is a proactive communicator, delivers on time, and his code quality is excellent. I would recommend him without hesitation.",
  },
  {
    id: 3,
    name: "Anupam Gurung",
    designation: "Lead Designer, CreativeHub",
    image: "https://i.pravatar.cc/150?img=8",
    testimony:
      "Nabal has a great eye for design and brings my mockups to life with precision. His knowledge of animations and micro-interactions elevated our product significantly.",
  },
  {
    id: 4,
    name: "Saraswati Shrestha",
    designation: "Engineering Director, CloudScale",
    image: "https://i.pravatar.cc/150?img=9",
    testimony:
      "Nabal's expertise in React and web performance optimizations transformed our slow dashboard into a blazing fast application. Outstanding technical leadership.",
  },
  {
    id: 5,
    name: "Bikash Adhikari",
    designation: "Founder, InnovateLabs",
    image: "https://i.pravatar.cc/150?img=12",
    testimony:
      "A talented frontend engineer who deeply understands state management and modern CSS architecture. Delivered complex features ahead of schedule.",
  },
];

/* ── Document (CV) ──────────────────────────────────────────────── */
export const DEV_DOCUMENT = {
  filename: "Nabal_Khadka_CV_dev.pdf",
  url: "#",
};
