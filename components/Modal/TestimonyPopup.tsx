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
    <div className="bg-white rounded-xl flex flex-col items-center gap-5 p-5">
      <figure className="w-40 h-40 ">
        <Image
          src={image}
          alt="profile image"
          width={100}
          height={100}
          className="w-full h-full rounded-full object-cover "
        />
      </figure>
      <section className="flex flex-col items-center gap-5  text-black rounded-xl ">
        <div className="flex flex-col items-center">
          <h2 className="text-xl text-[#d77a5c] font-bold">{name}</h2>
          <h3 className="text-black font-semibold pb-2">{designation}</h3>
          <div className="flex-grows h-0.5 bg-gradient-to-r from-red-400 to-green-400 w-full" />
        </div>
        <p className="text-black text-justify">{testimony}</p>
      </section>
    </div>
  );
};

export default TestimonyPopup;
