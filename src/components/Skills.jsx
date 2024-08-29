import React from "react";
import HorizontalLine from "./HorizontalLine";
import patternRings from "../assets/images/pattern-rings.svg";

const skillArr = [
  { name: "HTML", experience: "4 Years Experience" },
  { name: "CSS", experience: "4 Years Experience" },
  { name: "JavaScript", experience: "4 Years Experience" },
  { name: "Accessibility", experience: "4 Years Experience" },
  { name: "React", experience: "3 Years Experience" },
  { name: "Sass", experience: "3 Years Experience" },
];

const Skills = () => {
  return (
    <div className="flex flex-col px-10 xl:px-0 xl:w-[80%] w-[95%] justify-center items-center sm:m-auto m-0 sm:relative">
      <HorizontalLine className="mt-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 w-full">
        {skillArr.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col justify-start items-center sm:items-start text-center sm:text-start p-10 sm:pl-0"
          >
            <h1 className="text-white font-bold text-3xl">{skill.name}</h1>
            <span className="mt-3 text-gray-400">{skill.experience}</span>
          </div>
        ))}
      </div>
      <div className="relative">
        <img
          src={patternRings}
          alt="Pattern rings design"
          className="absolute h-[8rem] md:h-[8rem] sm:absolute bottom-[-6rem] left-[150%]"
        />
      </div>
    </div>
  );
};

export default Skills;
