import React, { useState, useEffect, useCallback } from "react";
import { useGlobalContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const Random = () => {
  const { setLoading, count, loading } = useGlobalContext();
  const [random, setRandom] = useState([]);
  const getDrink = useCallback(async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setRandom(data.drinks[0]);
    setLoading(false);
  }, [setLoading]);

  const {
    strDrink: name,
    strAlcoholic: alc,
    strGlass: glass,
    strDrinkThumb: image,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
  } = random;
  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strIngredient10,
  ];

  useEffect(() => {
    getDrink();
  }, [count, getDrink]);
  if (loading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="section cocktail-section">
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name}></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">category :</span> {alc}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}> {item}</span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Random;
