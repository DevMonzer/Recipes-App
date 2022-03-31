import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes, handleRecipeAdd }) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} recipe={recipe} />;
        })}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button onClick={handleRecipeAdd} className="btn btn--primary">
          Add Recipe
        </button>
      </div>
    </div>
  );
}
