import React from "react";
import IngredienstList from "./IngredienstList";

export default function Recipe({ recipe }) {
  const { name, cookTime, servings, instructions, ingredients } = recipe;

  return (
    <div>
      <div>
        <h3>{name}</h3>
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <span>Cook Time:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings:</span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions:</span>
        <div>{instructions}</div>
      </div>
      <div>
        <span>Ingredients:</span>
        <div>
          <IngredienstList ingredients={ingredients} />
        </div>
      </div>
    </div>
  );
}
