import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const Items = ({ imgUrl, album, artist }) => {
  return (
    <div className="itemList">
      <Link to="/album">
        <img src={imgUrl} alt="Capa" className="mb-1" />
        <span className="fonte-14 fonte-light-gray">{album}</span>
        <span className="fonte-14 fonte-gray">{artist}</span>
      </Link>
    </div>
  );
};

Items.propTypes = {
  imgUrl: PropTypes.string,
  album: PropTypes.string,
  artist: PropTypes.string
};

export default Items;
