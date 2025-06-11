import React from "react";
const skills = [
  {
    title: "JavaScript",
    proficiency: "90%",
  },
  {
    title: "React.js",
    proficiency: "85%",
  },
  {
    title: "Next.js",
    proficiency: "80%",
  },
  {
    title: "Tailwind CSS",
    proficiency: "95%",
  },
  {
    title: "Node.js",
    proficiency: "70%",
  },
  {
    title: "TypeScript",
    proficiency: "75%",
  },
  {
    title: "HTML & CSS",
    proficiency: "98%",
  },
];
const Skills = () => {
  return (
    <div className="flex flex-col justify-center  gap-4 p-5">
      {skills.length > 0 &&
        skills.map((skill: any, idx: number) => (
          <article key={idx} className="flex items-center gap-2">
            <h2 className="w-1/5">{skill.title}</h2>
            <div className="h-2 bg-white w-4/5">
              <div
                className="bg-red-500 h-full"
                style={{ width: skill.proficiency }}
              ></div>
            </div>
          </article>
        ))}
    </div>
  );
};

export default Skills;
