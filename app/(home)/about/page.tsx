"use client";

import React, { useEffect, useState } from "react";

// Define the shape of the data returned from the API
interface AboutItem {
  id: number;
  content: string;
}

const About = () => {
  const [aboutData, setAboutData] = useState<AboutItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch("/api/update-about");
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
    <main className="w-full px-5 py-10 flex flex-col justify-center h-full">
      {aboutData.length > 0 ? (
        aboutData.map((item) => <p key={item.id}>{item.content}</p>)
      ) : (
        <p>No about information available.</p>
      )}
    </main>
  );
};

export default About;
