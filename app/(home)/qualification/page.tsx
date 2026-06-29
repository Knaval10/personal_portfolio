"use client";

import Header from "@/components/Header/page";
import TimeLine, { QualificationType } from "@/components/TimeLine/TimeLine";
import React from "react";
import { useFetch } from "@/app/lib/useFetch";
import { DEV_EDUCATION, DEV_EXPERIENCE } from "@/app/lib/devData";

const Qualification: React.FC = () => {
  const { data: eduData } = useFetch<QualificationType[]>("/api/update-education", DEV_EDUCATION);
  const { data: expDataRaw } = useFetch<QualificationType[]>("/api/update-experience", DEV_EXPERIENCE);

  const expData = (expDataRaw ?? []).slice().sort((a, b) => a.id - b.id);

  return (
    <div className="flex flex-col gap-10 p-5 container">
      <Header
        title={"Qualification"}
        description={
          "An overview of my formal education, key courses, and any relevant training that supports my career."
        }
      />
      <div className="flex flex-col lg:flex-row justify-center gap-5 lg:gap-20">
        <section className="flex flex-col gap-4">
          <h2 className="text-white text-xl font-semibold">Experience</h2>
          <TimeLine qualificationData={expData} />
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="text-white text-xl font-semibold">Education</h2>
          <TimeLine qualificationData={eduData ?? []} />
        </section>
      </div>
    </div>
  );
};

export default Qualification;
