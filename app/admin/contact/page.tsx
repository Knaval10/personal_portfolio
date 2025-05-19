"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ContactAdmin() {
  const [contact, setContact] = useState({
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Submitting contact:", contact);
    // toast({
    //   title: "Contact Updated",
    //   description: "Your contact information has been updated successfully.",
    // });
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Contact Admin</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
        />
        <Input
          name="phone"
          placeholder="Phone"
          value={contact.phone}
          onChange={handleChange}
        />
        <Input
          name="linkedin"
          placeholder="LinkedIn URL"
          value={contact.linkedin}
          onChange={handleChange}
        />
        <Input
          name="github"
          placeholder="GitHub URL"
          value={contact.github}
          onChange={handleChange}
        />
        <Button type="submit">Save Contact Info</Button>
      </form>
    </div>
  );
}
