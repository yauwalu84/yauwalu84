import React, { useState } from "react";
import patternRings from "../assets/images/pattern-rings.svg";
import Footer from "./Footer";
import HorizontalLine from "./HorizontalLine";
import OutlinedText from "./OutlinedText";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return (
    <div className="bg-[#242424]">
      <div className="relative flex md:flex-row flex-col justify-center md:items-start md:justify-between px-10 xl:px-0 xl:w-[80%] w-[95%] sm:m-auto m-0 sm:mt-10 pt-10">
        <div className="md:w-1/2 text-center md:text-start flex flex-col">
          <h1 className="text-4xl md:text-[88px] font-bold mb-5">Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form
          autoComplete="off"
          className="md:w-1/2 w-full text-center md:text-start flex gap-3 flex-col justify-center items-start md:items-center mt-5 sm:mt-0"
        >
          <div className="w-full md:w-1/2">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              required
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              className="font-[500] relative left-3 bg-inherit placeholder:opacity-50 placeholder:text-white outline-none border-none"
              placeholder="NAME"
            />
            <HorizontalLine
              className={`my-5 ${name.length === 0 ? "" : "bg-[#4EE1A0]"}`}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              required
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="font-[500] relative left-3 bg-inherit placeholder:opacity-50 placeholder:text-white outline-none border-none"
              placeholder="EMAIL"
            />
            <HorizontalLine
              className={`my-5 ${
                email.length === 0
                  ? ""
                  : emailRegex.test(email)
                  ? "bg-[#4EE1A0]"
                  : "bg-[#FF6F5B]"
              }`}
            />
          </div>
          <div className="w-full md:w-1/2 mb-10">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              required
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="font-[500] relative left-3 bg-inherit placeholder:opacity-50 placeholder:text-white outline-none border-none"
              placeholder="MESSAGE"
              rows="4"
            />
            <HorizontalLine
              className={`my-20 ${message.length === 0 ? "" : "bg-[#4EE1A0]"}`}
            />
          </div>
          <OutlinedText text={"Send Message"} />
        </form>
        <img
          src={patternRings}
          alt="Decorative pattern rings"
          className="h-[5rem] xl:h-[7rem] absolute -left-36 -bottom-36"
        />
      </div>
      <Footer />
    </div>
  );
};

export default ContactSection;
