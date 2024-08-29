import React from "react";
import PropTypes from "prop-types";

const HorizontalLine = ({ className }) => {
  return <hr className={`h-[1px] w-full bg-white ${className}`} />;
};

HorizontalLine.propTypes = {
  className: PropTypes.string,
};

export default HorizontalLine;
