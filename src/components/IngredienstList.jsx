import React from "react";
import Ingredients from "./Ingredients";

export default function IngredienstList({ ingredients }) {
  return (
    <div className="ingredient-grid">
      {ingredients.map((ingredient) => {
        return <Ingredients key={ingredient.id} {...ingredient} />;
      })}
    </div>
  );
}
