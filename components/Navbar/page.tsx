import Link from "next/link";
import React from "react";
const navData = [
  {
    id: 1,
    link: "/about",
    title: "About",
  },
  {
    id: 2,
    link: "/education",
    title: "Education",
  },
  {
    id: 3,
    link: "/skills",
    title: "Skills",
  },
  {
    id: 4,
    link: "/projects",
    title: "Projects",
  },
];
const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full p-5 bg-transparent">
      <div className="">
        <Link href="/">Name</Link>
      </div>
      <div className="flex items-center gap-4">
        {navData?.map((nav) => (
          <Link key={nav?.id} href={nav?.link}>
            {nav?.title}
          </Link>
        ))}
        <button className="bg-blue-400 px-2 py-1 text-black hover:bg-white hover:text-blue-400 rounded-lg">
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
