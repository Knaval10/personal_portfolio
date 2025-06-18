"use client";

import React, { useEffect, useState } from "react";
import "./TextReveal.css";
interface TextType {
  text: string;
}
const ColorChangingTextCSS = ({ text }: TextType) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <span className={isAnimated ? "animate" : ""}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={"letter"}
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default ColorChangingTextCSS;
