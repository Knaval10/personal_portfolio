import React from "react";

interface HeaderType {
  title: string;
  description: string;
}

const Header = ({ title = "", description = "" }: HeaderType) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <section className="flex items-center gap-4 w-full">
        <div className="flex-grow h-px bg-gradient-to-r from-red-400 to-green-400"></div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-red-400 text-transparent bg-clip-text whitespace-nowrap">
          {title}
        </h2>
        <div className="flex-grow h-px bg-gradient-to-r from-red-400 to-green-400"></div>
      </section>
      {description && (
        <p className="text-[18px] md:text-xl text-white max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};

export default Header;
