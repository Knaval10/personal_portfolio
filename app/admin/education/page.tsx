"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { toast } from "@/app/components/ui/use-toast";

interface Education {
  institution: string;
  degree: string;
  year: string;
}

export default function EducationAdmin() {
  const [educations, setEducations] = useState<Education[]>([]);
  const [newEducation, setNewEducation] = useState<Education>({
    institution: "",
    degree: "",
    year: "",
  });

  const handleAddEducation = () => {
    if (newEducation.institution && newEducation.degree && newEducation.year) {
      setEducations([...educations, newEducation]);
      setNewEducation({ institution: "", degree: "", year: "" });
    }
  };

  const handleRemoveEducation = (index: number) => {
    setEducations(educations.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Submitting education:", educations);
    toast({
      title: "Education Updated",
      description: "Your education history has been updated successfully.",
    });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Education Admin</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            placeholder="Institution"
            value={newEducation.institution}
            onChange={(e) =>
              setNewEducation({ ...newEducation, institution: e.target.value })
            }
          />
          <Input
            placeholder="Degree"
            value={newEducation.degree}
            onChange={(e) =>
              setNewEducation({ ...newEducation, degree: e.target.value })
            }
          />
          <Input
            placeholder="Year"
            value={newEducation.year}
            onChange={(e) =>
              setNewEducation({ ...newEducation, year: e.target.value })
            }
          />
          <Button type="button" onClick={handleAddEducation}>
            Add Education
          </Button>
        </div>
        <ul className="space-y-2">
          {educations.map((edu, index) => (
            <li key={index} className="flex justify-between items-center">
              {`${edu.degree} at ${edu.institution}, ${edu.year}`}
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleRemoveEducation(index)}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
        <Button type="submit">Save Education</Button>
      </form>
    </div>
  );
}
