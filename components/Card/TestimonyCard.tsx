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
const TestimonyCard = ({ item }: TestimonyProps) => {
  const { image, name, designation, testimony } = item;
  return (
    <div className="relative top-10 min-h-[300px]">
      <figure className="absolute -top-10 right-5 z-10 bg-gradient-to-r from-red-500 to-[#d77a5c] p-1 rounded-full">
        <Image
          src={image}
          alt="profile image"
          className="rounded-full w-24 h-24"
        />
      </figure>
      <section className="flex flex-col gap-2 p-2 bg-white text-black rounded-xl">
        <div className="flex flex-col">
          <h2 className="text-xl text-[#d77a5c] font-bold">{name}</h2>
          <h3 className=" font-semibold">{designation}</h3>
        </div>
        <div className="flex-grow h-px bg-gradient-to-r from-red-400 to-green-400 w-[60%]"></div>
        <p>{testimony}</p>
      </section>
    </div>
  );
};

export default TestimonyCard;
