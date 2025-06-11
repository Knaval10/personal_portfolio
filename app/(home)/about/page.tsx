"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import profilePic from "../../assets/image/NabalPP.jpg";

// Define the shape of the data returned from the API
interface AboutItem {
  id: number;
  content: string;
}
const skillSet = [
  {
    id: 1,
    title: "JavaScript",
  },
  {
    id: 2,
    title: "React.Js",
  },
  {
    id: 3,
    title: "Next.Js",
  },
  {
    id: 4,
    title: "Redux",
  },
];
const About = () => {
  const [aboutData, setAboutData] = useState<AboutItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch(`api/update-about`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: AboutItem[] = await response.json();
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
    <main className="flex justify-center items-center gap-10 px-5 py-10 ">
      <figure className="h-[300px] w-[300px] border-l-2 border-black rounded-bl-[100px]">
        <Image
          src={profilePic}
          alt={"profile-picture"}
          className="h-full w-full rounded-bl-[100px]"
          loading="lazy"
        />
      </figure>
      <div className="w-1/2 flex flex-col justify-center gap-2 h-full">
        <h2 className="text-3xl font-bold">About Me</h2>
        {aboutData.length > 0 ? (
          aboutData.map((item) => <p key={item.id}>{item.content}</p>)
        ) : (
          <p>No about information available.</p>
        )}
        {skillSet.length > 0
          ? skillSet.map((item, idx) => (
              <div key={idx} className="">
                {item.title}
              </div>
            ))
          : ""}
      </div>
    </main>
  );
};

export default About;
