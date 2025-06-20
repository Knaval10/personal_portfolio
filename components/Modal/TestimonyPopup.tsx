import React from "react";
import Image from "next/image";
interface ItemType {
  image: string;
  name: string;
  designation: string;
  testimony: string;
}
interface TestimonyProps {
  item: ItemType;
}
const TestimonyPopup = ({ item }: TestimonyProps) => {
  const { image, name, designation, testimony } = item;
  return (
    <div className="relative">
      <figure className="absolute top-2 right-2 z-10 p-1 rounded-full">
        <Image
          src={image}
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full w-24 h-24 "
        />
      </figure>
      <section className="flex flex-col gap-2 p-5 pt-10 bg-white text-black rounded-xl h-[350px]">
        <div className="flex flex-col">
          <h2 className="text-xl text-[#d77a5c] font-bold">{name}</h2>
          <h3 className="text-black font-semibold">{designation}</h3>
        </div>
        <div className="flex-grows h-0.5 bg-gradient-to-r from-red-400 to-green-400 w-[60%]"></div>
        <p className="text-black">{testimony}</p>
      </section>
    </div>
  );
};

export default TestimonyPopup;
