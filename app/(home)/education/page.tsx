"use client";

import React, { useEffect, useState } from "react";

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  // Add more fields based on your API response
}

const Education: React.FC = () => {
  const [eduData, setEduData] = useState<EducationItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch("/api/update-education");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: EducationItem[] = await response.json();
        setEduData(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchEducationData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Education</h1>
      <ul>
        {eduData?.map((item) => (
          <li key={item.id}>
            <strong>{item.degree}</strong> - {item.institution} ({item.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
