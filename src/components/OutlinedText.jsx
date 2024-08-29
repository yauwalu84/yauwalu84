const OutlinedText = ({ text }) => {
  return (
    <a
      href="#"
      className="w-fit inline-block underline hover:text-[#4EE1A0] decoration-[#4EE1A0] underline-offset-[0.8rem] text-base m-auto sm:m-0 sm:text-start text-white font-bold"
      aria-label={text}
    >
      {text}
    </a>
  );
};

export default OutlinedText;
