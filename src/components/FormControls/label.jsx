import React from "react";
import { PropTypes } from "prop-types";

const SimpleLabel = ({ text, classes }) => {
  return <label className={classes}>{text}</label>;
};

SimpleLabel.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.string
};

export default SimpleLabel;
