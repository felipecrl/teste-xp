import React from "react";
import { PropTypes } from "prop-types";

const Tracks = ({ number, name, time }) => {
  return (
    <div className="track">
      <div className="number">{number}</div>
      <div className="name">{name}</div>
      <div className="time">{time}</div>
    </div>
  );
};

Tracks.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string
};

export default Tracks;
