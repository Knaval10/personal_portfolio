"use client";

import React, { useEffect, useState } from "react";

const Education = () => {
  const [eduData, setEduData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch("/api/update-education");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEduData(data);
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
  console.log("data", eduData);
  return (
    <div>
      <h1>Education</h1>
    </div>
  );
};

export default Education;
