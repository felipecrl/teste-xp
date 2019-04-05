import React from "react";
//import { PropTypes } from "prop-types";

// Components
import { Items } from "../";

const ListItems = () => {
  return (
    <div className="recently-search-list">
      <h2 className="fonte-24 fonte-light-gray mb-3">
        Álbuns buscados recentemente
      </h2>

      <div className="list">
        <Items imgUrl="images/logo.png" album="Álbum" artist="Artista" />
        <Items imgUrl="images/logo.png" album="Álbum" artist="Artista" />
        <Items imgUrl="images/logo.png" album="Álbum" artist="Artista" />
        <Items imgUrl="images/logo.png" album="Álbum" artist="Artista" />
      </div>
    </div>
  );
};

ListItems.propTypes = {};

export default ListItems;
