import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({
  idDrink,
  strDrink,
  strAlcoholic,
  strGlass,
  strDrinkThumb,
}) => {
  return (
    <article className="cocktail">
      <Link to={`/cocktail/${idDrink}`}>
        <div className="image-container">
          <img src={strDrinkThumb} alt="logo" />
        </div>
        <div className="cocktail-footer">
          <h3 className="section-title">{strDrink}</h3>
          <h4>{strGlass}</h4>
          <p>{strAlcoholic}</p>
        </div>
      </Link>
    </article>
  );
};

export default Cocktail;
