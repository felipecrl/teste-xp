import React from "react";
//import { PropTypes } from "prop-types";

// Components
import { Input, Label } from "../";

const Search = () => {
  return (
    <div className="search">
      <Label
        text="Busque por artistas, álbuns ou músicas"
        classes="fonte-16 fonte-light-gray"
      />
      <Input placeholder="Comece a escrever..." />
    </div>
  );
};

Search.propTypes = {};

export default Search;
