import React from "react";
import HorizontalLine from "./HorizontalLine";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="bg-[#242424] pb-10">
      <div className="px-10 xl:px-0 xl:w-[80%] w-[95%] sm:m-auto sm:mt-40">
        <HorizontalLine className="my-10" />
        <div className="flex md:justify-between justify-center items-center md:flex-row flex-col">
          <h2 className="text-center font-bold text-3xl">adamkeyes</h2>
          <Socials socialClass="text-blue-500" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
