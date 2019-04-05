import React from "react";
import { PropTypes } from "prop-types";

const SimpleInput = ({ placeholder }) => {
  return <input type="text" placeholder={placeholder} />;
};

SimpleInput.propTypes = {
  placeholder: PropTypes.string
};

export default SimpleInput;
