import React from "react";
import Ingredients from "./Ingredients";

export default function IngredienstList({ sampleRecipes, ingredients }) {
  return (
    <div>
      {ingredients.map((ingredient) => {
        return <Ingredients key={ingredient.id} ingredients={ingredients} />;
      })}
    </div>
  );
}
