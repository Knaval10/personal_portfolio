"use client";

import { Button } from "@/components/ui/button";
import Textarea from "@/components/ui/textarea";
import { useState } from "react";

export default function AboutAdmin() {
  const [about, setAbout] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting about:", about);
    // toast({
    //   title: "About Updated",
    //   description: "Your about section has been updated successfully.",
    // });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">About Admin</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Enter your about text here"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="min-h-[200px]"
        />
        <Button type="submit">Save About</Button>
      </form>
    </div>
  );
}
