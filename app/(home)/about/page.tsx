"use client";
import React, { useEffect, useState } from "react";
import aboutBg from "../../assets/image/Tech.jpg";
import Image from "next/image";

const About = () => {
  const [aboutData, setAboutData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch("/api/update-about");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAboutData(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEducationData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <main className="w-full px-5 py-10 flex flex-col justify-center h-full">
      {/* <section className="flex flex-col gap-4">
        <article className="flex flex-col gap-2">
          <h2>
            Hello, I'm{" "}
            <span className="font-bold text-black text-2xl">Nabal Khadka</span>
          </h2>
          <p>
            I am a skilled frontend developer with an enthusiasm for developing
            responsive and user-friendly web applications. I have a Bachelor's
            degree in Computer Engineering from Institute of Engineering,
            Tribhuvan University with a strong technical foundation and creative
            problem-solving skills.
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <h2 className="font-bold">Expertise</h2>
          <p>
            He has expertise in HTML, CSS, and JavaScript, along with
            proficiency in modern frontend frameworks React.Js and Next.Js. He
            is expert in translating static design into responsive and
            interactive user interfaces, ensuring smooth user experience.
          </p>
        </article>
        <article className="flex flex-col gap-2">
          <h2 className="font-bold">Plus Point</h2>
          <p>
            In addition to his technical skills, he is a team player who
            collaborates closely with designers, backend developers, and
            stakeholders to make the projects fruitful. Outside of work, he
            enjoys exploring new technologies, contributing to open-source
            projects, and attending tech meetings to expand his knowledge and
            network.
          </p>
        </article>
      </section> */}
      {aboutData &&
        aboutData?.length > 0 &&
        aboutData.map((item, idx) => <p>{item?.content}</p>)}
    </main>
  );
};

export default About;
