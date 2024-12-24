"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { toast } from "@/app/components/ui/use-toast";

export default function SkillsAdmin() {
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Submitting skills:", skills);
    toast({
      title: "Skills Updated",
      description: "Your skills have been updated successfully.",
    });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Skills Admin</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-2">
          <Input
            placeholder="Add a new skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <Button type="button" onClick={handleAddSkill}>
            Add
          </Button>
        </div>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex justify-between items-center">
              {skill}
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleRemoveSkill(index)}
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
        <Button type="submit">Save Skills</Button>
      </form>
    </div>
  );
}
