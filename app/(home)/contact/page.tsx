"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Phone from "../../assets/icons/Phone.svg";
import Email from "../../assets/icons/Email.svg";
import Image from "next/image";
import Toast from "@/components/Toast/page";
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const initialValues: FormData = { name: "", email: "", message: "" };
  const [data, setData] = useState<FormData>(initialValues);
  const [error, setError] = useState<FormData>(initialValues);
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState<"success" | "error">("success");

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
    setLoading(true);
    if (!data.name.trim()) {
      setError((prevError) => ({ ...prevError, name: "Enter your name" }));
      isValid = false;
      setLoading(false);
    }

    if (!data.email.trim()) {
      setError((prevError) => ({ ...prevError, email: "Enter your email" }));
      isValid = false;
      setLoading(false);
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
      setLoading(false);
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

        if (response.status === 201) {
          setShowToast(true);
          setToastType("success");
        } else {
          setShowToast(true);
          setToastType("error");
        }
        setData(initialValues);
        setError(initialValues);
        setLoading(false);
      } catch (error) {
        console.error("Error submitting the form:", error);
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  }, [showToast]);
  return (
    <main className="  bg-[#2F2F8A] bg-opacity-40">
      <div className="flex flex-col md:flex-row gap-10  w-full rounded-xl container p-5">
        <section className="md:w-1/2 flex flex-col gap-5 text-white ">
          <h2 className="text-xl font-bold">Get in touch</h2>
          <p className="text-base font-medium leading-[24px]">
            I am very approachable and would love to speak to you. Feel free to
            call, send me an email. Follow mw in social media or simply complete
            the enquiry form.
          </p>
          <div className="flex flex-col gap-2 pt-5 text-white font-medium">
            <a
              className="flex gap-1 hover:underline text-sm w-fit"
              href="tel:+977 9811312998"
            >
              <Image
                src={Phone}
                alt={"phone"}
                width={10}
                height={20}
                className="w-3"
              />
              +977 9811312998
            </a>
            <a
              className="flex gap-1 hover:underline text-sm w-fit"
              href="mailTo:nabal.khadka7@gmail.com"
            >
              <Image
                src={Email}
                alt={"email"}
                width={10}
                height={20}
                className="w-3"
              />
              nabal.khadka7@gmail.com
            </a>
          </div>
        </section>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 md:w-1/2">
          <h2 className="text-xl font-bold text-white">Send me messages</h2>
          <article className="flex flex-col gap-2 text-white text-sm ">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleInputChange}
              className="text-white p-2 rounded-lg bg-white bg-opacity-30"
            />
            {error.name && (
              <span className="text-red-500 text-sm">{error.name}</span>
            )}
          </article>

          <article className="flex flex-col gap-2 text-white text-sm ">
            <span>Email</span>
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleInputChange}
              className="text-white p-2 rounded-lg bg-white bg-opacity-30"
            />
            {error.email && (
              <span className="text-red-500 text-sm">{error.email}</span>
            )}
          </article>

          <article className="flex flex-col gap-2 text-white text-sm">
            <span>Message</span>
            <textarea
              name="message"
              value={data.message}
              onChange={handleInputChange}
              className="text-white p-2 rounded-lg bg-white bg-opacity-30"
            />
            {error.message && (
              <span className="text-red-500 text-sm">{error.message}</span>
            )}
          </article>

          <button
            type="submit"
            disabled={loading}
            className="disabled:cursor-not-allowed py-2 px-4 bg-gradient-to-r from-[#C961DE] to-[#2954A3] hover:bg-gradient-to-r hover:to-[#C961DE] hover:from-[#2954A3] w-fit rounded-lg text-white text-sm font-semibold"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
      {showToast ? (
        <div className="fixed top-32 right-2 z-[100]">
          <Toast
            message={
              toastType === "success"
                ? "Thank you for contacting!, I will get back to you."
                : "Submission error!"
            }
            container={toastType === "success" ? "bg-green-400" : "bg-red-400"}
          />
        </div>
      ) : null}
    </main>
  );
};

export default Contact;
