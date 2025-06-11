import Link from "next/link";
import React from "react";
interface ProjectProps {
  title: string;
  thumbnail: any;
  link: any;
}
const ProjectCard = ({ title, thumbnail, link }: ProjectProps) => {
  return (
    <div
      className="bg-white bg-opacity-40 relative h-80 bg-cover bg-center"
      style={{ backgroundImage: `url(${thumbnail})` }}
    >
      <Link
        href={link}
        target="_blank"
        className="absolute bottom-0 bg-black bg-opacity-30 text-white font-semibold text-xl p-3 w-full text-center"
      >
        {title}
      </Link>
    </div>
  );
};

export default ProjectCard;
