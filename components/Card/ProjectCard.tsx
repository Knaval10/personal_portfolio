import React from "react";
import Link from "next/link";
import visit from "../../app/assets/icons/Visit.svg";
import Image from "next/image";
export interface ProjectProps {
  title: string;
  thumbnail: string;
  link: string;
  stacks: string[];
  description: string;
}

const ProjectCard = ({
  title,
  description,
  thumbnail,
  link,
  stacks,
}: ProjectProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="block w-full h-full group overflow-hidden"
    >
      <div
        className="bg-white bg-opacity-40 relative h-80 bg-cover bg-center rounded-xl hover:shadow-lg"
        style={{ backgroundImage: `url(${thumbnail})` }}
      >
        <article className="flex flex-col gap-2 absolute bottom-0 transition-transform duration-500 md:translate-y-full md:group-hover:-translate-y-0 bg-black bg-opacity-60 text-white font-semibold text-xl p-3 w-full text-center rounded-b-xl">
          <h2 className="">{title}</h2>
          <p className="text-sm font-normal">{description}</p>
          <div className="flex flex-wrap gap-2 text-sm ">
            {stacks?.length > 0 &&
              stacks.map((stack, idx) => (
                <p key={idx} className="p-2 rounded-lg border border-gray-100">
                  {stack}
                </p>
              ))}
            <button className="flex gap-2 rounded-lg text-white text-sm font-semibold px-3 py-2 hover:bg-gradient-to-r hover:to-[#C961DE] hover:from-[#2954A3] bg-gradient-to-r from-[#C961DE] to-[#2954A3]">
              <span>Visit Site</span>
              <Image
                src={visit}
                alt={"visit icon"}
                width={100}
                height={100}
                className="w-5 h-5"
              />
            </button>
          </div>
        </article>
        <h2 className="hidden md:block md:group-hover:hidden absolute bottom-0 bg-black bg-opacity-60 text-white font-semibold text-xl p-3 w-full text-center rounded-b-xl">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default ProjectCard;
