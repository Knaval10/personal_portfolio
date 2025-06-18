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
    setError((prevError) => ({ ...prevError, [name]: "" }));
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
    <main className="  bg-[#2F2F8A] bg-opacity-40">
      <div className="flex flex-col md:flex-row gap-10  w-full rounded-xl container p-5">
        <section className="md:w-1/2 flex flex-col gap-5 text-white ">
          <h2 className="text-2xl font-bold">Get in touch</h2>
          <p className="text-xl font-medium leading-[28px]">
            I am very approachable and would love to speak to you. Feel free to
            call, send me an email. Follow mw in social media or simply complete
            the enquiry form.
          </p>
          <div className="flex flex-col gap-2 pt-5 text-white font-medium">
            <a href="tel:+977 9811312998">+977 9811312998</a>
            <a href="mailTo:nabal.khadka7@gmail.com">nabal.khadka7@gmail.com</a>
          </div>
        </section>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:w-1/2">
          <h2 className="text-2xl font-bold text-white">Send me messages</h2>
          <article className="flex flex-col gap-2">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              className="text-black p-2 rounded-lg bg-white bg-opacity-30"
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
              className="text-black p-2 rounded-lg bg-white bg-opacity-30"
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
              className="text-black p-2 rounded-lg bg-white bg-opacity-30"
            />
            {error.message && (
              <span className="text-red-500 text-sm">{error.message}</span>
            )}
          </article>

          <button
            type="submit"
            className="py-2 px-4 bg-gradient-to-r from-[#C961DE] to-[#2954A3] w-fit rounded-lg text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
