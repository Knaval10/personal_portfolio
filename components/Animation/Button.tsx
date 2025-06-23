import Arrow from "@/app/assets/dynamic/Arrow";
import React from "react";
interface ButtonType {
  label: string;
}
const Button = ({ label }: ButtonType) => {
  return (
    <>
      <button className="hidden md:block group relative overflow-hidden px-4 py-2 border border-current rounded-lg text-white w-40">
        <span className="absolute inset-0 bg-gradient-to-r from-[#C961DE] to-[#2954A3] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0 rounded-full"></span>
        <div className="relative flex items-center gap-2 z-10 w-fit">
          <span className="overflow-hidden whitespace-nowrap transform -translate-x-4 opacity-0 group-hover:translate-x-4 group-hover:opacity-100 transition-all duration-500 ease-out ml-1">
            {label}
          </span>
          <span className="transform transition-transform duration-500 -translate-x-[100px] group-hover:translate-x-4 bg-gradient-to-r from-[#C961DE] to-[#2954A3] group-hover:bg-none p-2 rounded-full">
            <Arrow className="" />
          </span>
        </div>
      </button>
      <button className="md:hidden bg-gradient-to-r from-[#C961DE] to-[#2954A3] flex items-center gap-2 w-fit px-3 py-2 rounded-xl">
        <span className="text-white text-sm font-semibold">{label}</span>
        <span className="">
          <Arrow className="" />
        </span>
      </button>
    </>
  );
};

export default Button;
