"use client";

import Link from "next/link";
import React, { useState } from "react";
import logo from "../../app/assets/icons/N.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
const navData = [
  {
    id: 1,
    link: "/about",
    title: "About",
    icon: "ℹ️",
  },
  {
    id: 2,
    link: "/qualification",
    title: "Qualification",
    icon: "🏅",
  },
  {
    id: 3,
    link: "/skills",
    title: "Skills",
    icon: "🧠",
  },
  {
    id: 4,
    link: "/projects",
    title: "Projects",
    icon: "🗂️",
  },
  {
    id: 5,
    link: "/#contact",
    title: "Contact Me",
    icon: "✉️",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      {/*Larger screens' navbar */}
      <div className="flex items-center justify-between w-full p-5 bg-transparent fixed top-0 z-10 backdrop-blur-2xl ">
        <div className="">
          <Link href="/">
            <Image src={logo} alt={"Nabal"} />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          {navData?.map((nav) => (
            <Link
              key={nav?.id}
              href={nav?.link}
              className={`p-2 font-semibold border-b-2 ${
                pathname === nav?.link
                  ? "border-white text-white"
                  : "border-transparent text-gray-200 hover:border-white hover:text-white"
              }`}
            >
              {nav?.title}
            </Link>
          ))}
        </div>
      </div>

      {/*Smaller screens' navbar */}
      <div className="fixed top-0 right-0 w-32 h-32 md:hidden flex items-center z-50 p-5">
        <button
          onClick={toggleMenu}
          className={`w-14 h-14 border-4 border-teal-500 rounded-full text-white flex flex-col items-center justify-center shadow-lg text-3xl absolute right-5 z-20 ${
            isOpen ? " top-[105px]" : "top-5"
          }`}
        >
          <span
            className={`block w-6 h-1 bg-teal-500 rounded transition-transform duration-500 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-teal-500 rounded my-1 transition-opacity duration-500 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-1 bg-teal-500 rounded transition-transform duration-500 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        <ul
          className={`absolute w-full h-full flex justify-center items-center z-10 ${
            isOpen ? "top-16" : "top-0"
          }`}
        >
          {navData.map((item, index) => {
            const angle = (-180 / (navData.length - 1)) * index - 90;
            // const angle = (360 / navData?.length) * index;
            const radius = 90;

            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <li
                key={index}
                onClick={() => setIsOpen(false)}
                className={`absolute transition-all duration-500 ease-out`}
                style={{
                  transform: isOpen
                    ? `translate(${x}px, ${y}px)`
                    : `translate(0, 0)`,
                  opacity: isOpen ? 1 : 0,
                  transitionDelay: `${index * 10}ms`,
                }}
              >
                <Link
                  href={item?.link}
                  className="w-10 h-10 rounded-full bg-green-600s text-white flex items-center justify-center shadow-lg text-xl bg-teal-100"
                >
                  {item.icon}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
