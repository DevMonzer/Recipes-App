import React from "react";
import Ingredients from "./Ingredients";

export default function IngredienstList({ ingredients }) {
  const ingredientsElement = ingredients.map((ingredient) => {
    return <Ingredients key={ingredient.id} ingredients={ingredients} />;
  });

  return <div>{ingredientsElement}</div>;
}
