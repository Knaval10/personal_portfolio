"use client";

import Header from "@/components/Header/page";
import TimeLine, { QualificationType } from "@/components/TimeLine/TimeLine";
import React, { useEffect, useState } from "react";

const Qualification: React.FC = () => {
  const [eduData, setEduData] = useState<QualificationType[]>([]);
  const [expData, setExpData] = useState<QualificationType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch("/api/update-education");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: QualificationType[] = await response.json();
        setEduData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchEducationData();
  }, []);
  useEffect(() => {
    const fetchExperienceData = async () => {
      try {
        const response = await fetch("/api/update-experience");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: QualificationType[] = await response.json();
        setExpData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperienceData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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

          <TimeLine qualificationData={eduData} />
        </section>
      </div>
    </div>
  );
};

export default Qualification;
