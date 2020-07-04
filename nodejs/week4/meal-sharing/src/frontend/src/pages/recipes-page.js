import React from "react";
import Cupcake from "./cupcake.png";
import "./recipes-page.css";

export const RecipesPage = () => {
  return (
    <div className="recipes-container">
      <h1 className="recipes-h1">My favorite recipes</h1>
      <section className="cupcake-with-line">
        <div className="line-1"></div>
        <img src={Cupcake} alt="cupcake image" className="cupcake-img" />
        <div className="line-2"></div>
      </section>
      <h2>Strawberry Pavlova Recipe</h2>
      <p>
        Strawberry Pavlova is the perfect summer dessert. This light meringue
        cake is topped with Chantilly Cream, delicious Strawberry Sauce and
        fresh Strawberries.
      </p>
    </div>
  );
};
