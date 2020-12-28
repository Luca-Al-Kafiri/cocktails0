import React from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";

const Cocktails = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <div className="loading"></div>;
  }
  if (cocktails === null) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.idDrink} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Cocktails;
