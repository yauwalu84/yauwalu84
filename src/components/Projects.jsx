import React, { useState } from "react";
import project1 from "../assets/images/thumbnail-project-1-large.webp";
import project2 from "../assets/images/thumbnail-project-2-large.webp";
import project3 from "../assets/images/thumbnail-project-3-large.webp";
import project4 from "../assets/images/thumbnail-project-4-large.webp";
import project5 from "../assets/images/thumbnail-project-5-large.webp";
import project6 from "../assets/images/thumbnail-project-6-large.webp";

const projects = [
  { name: "DESIGN PORTFOLIO", img: project1 },
  { name: "E-LEARNING LANDING PAGE", img: project2 },
  { name: "TODO WEB APP", img: project3 },
  { name: "ENTERTAINMENT WEB APP", img: project4 },
  { name: "MEMORY GAME", img: project5 },
  { name: "ART GALLERY SHOWCASE", img: project6 },
];

const SingleProject = ({ project }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col items-start justify-between cursor-pointer relative hover:opacity-75 opacity-100"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={project.img} alt={project.name} className="object-cover" />
      <div
        className={`absolute m-auto md:flex hidden flex-col items-center w-full justify-center h-[80%] gap-8 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      >
        <a
          href="#"
          className="w-fit inline-block underline hover:text-[#4EE1A0] decoration-[#4EE1A0] underline-offset-[10px] text-base m-auto sm:m-0 sm:text-start text-white font-bold"
        >
          VIEW PROJECT
        </a>
        <a
          href="#"
          className="w-fit inline-block underline hover:text-[#4EE1A0] decoration-[#4EE1A0] underline-offset-[10px] text-base m-auto sm:m-0 sm:text-start text-white font-bold"
        >
          VIEW CODE
        </a>
      </div>
      <h2 className="font-bold text-2xl my-3">{project.name}</h2>
      <div className="flex mb-5 gap-5 md:mb-0 text-[#D9D9D9] text-lg">
        <span>HTML</span>
        <span>CSS</span>
        <span>JAVASCRIPT</span>
      </div>
      <div className="opacity-100 flex md:hidden w-full justify-between">
        <a
          href="#"
          className="w-fit inline-block underline hover:text-[#4EE1A0] decoration-[#4EE1A0] underline-offset-[0.8rem] text-base text-break text-start text-white font-bold"
        >
          VIEW PROJECT
        </a>
        <a
          href="#"
          className="w-fit inline-block underline hover:text-[#4EE1A0] decoration-[#4EE1A0] underline-offset-[0.8rem] text-base text-break text-start text-white font-bold"
        >
          VIEW CODE
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col px-10 xl:px-0 xl:w-[80%] w-[95%] sm:m-auto m-0 sm:mt-36">
      <div className="w-full mb-20 flex justify-between items-center">
        <h1 className="font-bold text-4xl sm:text-6xl">Projects</h1>
        <div>
          <a
            href="#"
            className="w-fit inline-block underline hover:text-[#4EE1A0] decoration-[#4EE1A0] underline-offset-[0.8rem] text-base sm:text-3xl"
          >
            CONTACT ME
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 md:gap-5 gap-10">
        {projects.map((project) => (
          <SingleProject key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
