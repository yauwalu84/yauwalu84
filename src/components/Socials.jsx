import React from "react";
import linkedin from "../assets/images/icon-linkedin.svg";
import twitter from "../assets/images/icon-twitter.svg";
import frontend from "../assets/images/icon-frontend-mentor.svg";
import github from "../assets/images/icon-github.svg";

const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: linkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/",
    icon: github,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/",
    icon: twitter,
  },
  {
    name: "Frontend Mentor",
    url: "https://www.frontendmentor.io/",
    icon: frontend,
  },
];

const Socials = ({ socialClass = "" }) => (
  <div className="flex xl:justify-end justify-center">
    {socials.map(({ name, url, icon }) => (
      <a
        href={url}
        key={name}
        className={`flex justify-center items-center p-3`}
      >
        <img src={icon} alt={`${name} icon`} className={socialClass} />
      </a>
    ))}
  </div>
);

export default Socials;
