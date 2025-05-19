"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const initialValues: FormData = { name: "", email: "", message: "" };
  const [data, setData] = useState<FormData>(initialValues);
  const [error, setError] = useState<FormData>(initialValues);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: "" })); // Clear error on change
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;

    if (!data.name.trim()) {
      setError((prevError) => ({ ...prevError, name: "Enter your name" }));
      isValid = false;
    }

    if (!data.email.trim()) {
      setError((prevError) => ({ ...prevError, email: "Enter your email" }));
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      setError((prevError) => ({
        ...prevError,
        email: "Enter a valid email address",
      }));
      isValid = false;
    }

    if (!data.message.trim()) {
      setError((prevError) => ({
        ...prevError,
        message: "Enter your message",
      }));
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await fetch("/api/update-contact/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log("Form submitted successfully:", result);
        setData(initialValues);
        setError(initialValues);
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5">
      <article className="flex flex-col gap-2">
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleInputChange}
          className="text-black p-2 rounded-lg"
        />
        {error.name && (
          <span className="text-red-500 text-sm">{error.name}</span>
        )}
      </article>

      <article className="flex flex-col gap-2">
        <span>Email</span>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleInputChange}
          className="text-black p-2 rounded-lg"
        />
        {error.email && (
          <span className="text-red-500 text-sm">{error.email}</span>
        )}
      </article>

      <article className="flex flex-col gap-2">
        <span>Message</span>
        <textarea
          name="message"
          value={data.message}
          onChange={handleInputChange}
          className="text-black p-2 rounded-lg"
        />
        {error.message && (
          <span className="text-red-500 text-sm">{error.message}</span>
        )}
      </article>

      <button
        type="submit"
        className="p-2 bg-green-300 w-fit rounded-lg text-black"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;
