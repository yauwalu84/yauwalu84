import React from "react";
import patternRings from "../assets/images/pattern-rings.svg";
import patternCircle from "../assets/images/pattern-circle.svg";
import profileImg from "../assets/images/image-profile-desktop.webp";
import Socials from "./Socials";

const TopSection = () => {
  return (
    <section className="flex flex-col-reverse sm:px-10 p-5 sm:flex-row justify-center mb-20">
      <div className="flex flex-col justify-start z-50">
        <h2 className="font-semibold sm:block hidden" aria-label="User Name">
          adamkeyes
        </h2>
        <div className="xl:w-8/12 w-full">
          <img
            src={patternRings}
            alt="rings"
            className="h-[5rem] xl:h-[5rem] absolute -left-15 top-28 xl:-left-12 m-auto xl:mt-10"
          />
        </div>
        <div className="my-10 sm:mt-40">
          <h1 className="font-bold text-3xl sm:text-7xl text-center sm:text-start">
            Nice To Meet You!
          </h1>
          <h1 className="font-bold text-3xl sm:text-7xl text-center sm:text-start">
            I&apos;m{" "}
            <span className="underline decoration-[#4EE1A0] underline-offset-[0.4rem]">
              Adam Keyes.
            </span>
          </h1>
          <p className="my-10 text-normal text-gray-500 sm:w-[60%] w-full text-center sm:text-start">
            Based in the UK, I&apos;m a front-end Developer passionate about
            building accessible web apps that users love.
          </p>
        </div>
        <a
          href="#contact"
          className="w-fit inline-block underline hover:text-[#4EE1A0] decoration-[#4EE1A0] underline-offset-[0.8rem] text-2xl m-auto sm:m-0 sm:text-start"
        >
          CONTACT ME
        </a>
      </div>

      <div
        className="sm:relative md:mr-10 top-10 sm:right-10 sm:mt-5 md:mt-0 md:-top-5 h-[100vh] w-[100%] m-auto sm:m-0 sm:w-[75%] md:w-[30rem] max-w-[130%] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${profileImg})` }}
      >
        <h2
          className="font-semibold block sm:hidden text-center"
          aria-label="User Name"
        >
          adamkeyes
        </h2>

        <Socials />
        <div className="overflow-clip sm:overflow-auto relative sm:static">
          <img
            src={patternCircle}
            alt="circle design"
            className="absolute sm:right-0 top-[25rem] -right-[3rem] sm:bottom-7 sm:-left-16"
          />
        </div>
      </div>
    </section>
  );
};

export default TopSection;
