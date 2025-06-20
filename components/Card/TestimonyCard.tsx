import React from "react";
import Image from "next/image";
import Button from "../Animation/Button";
export interface ItemType {
  id: number;
  image: string;
  name: string;
  designation: string;
  testimony: string;
}
export interface TestimonyProps {
  item: ItemType;
  handleClick: () => void;
}
const TestimonyCard = ({ item, handleClick }: TestimonyProps) => {
  const { image, name, designation, testimony } = item;
  return (
    <div onClick={handleClick} className="relative top-10 min-h-[280px]">
      <figure className="absolute -top-10 right-5 z-10 bg-gradient-to-r from-red-500 to-[#d77a5c] p-1 rounded-full">
        <Image
          src={image}
          alt="profile image"
          width={100}
          height={100}
          className="rounded-full w-16 sm:w-24 h-16 sm:h-24 min-[320px]:h-14 min-[320px]:w-14"
        />
      </figure>
      <section className="flex flex-col gap-2 p-5 bg-white text-black rounded-xl ">
        <div className="flex flex-col">
          <h2 className="text-xl text-[#d77a5c] font-bold">{name}</h2>
          <h3 className="text-black font-semibold">{designation}</h3>
        </div>
        <div className="flex-grow h-0.5 bg-gradient-to-r from-red-400 to-green-400 w-[60%]"></div>
        <p className="text-black line-clamp-3">{testimony}</p>
        <Button label={"Read More"} />
      </section>
    </div>
  );
};

export default TestimonyCard;
