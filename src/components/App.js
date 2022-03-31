import React, { useState } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import uuidv4 from "uuid/v4";

export default function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr.",
      ingredients: [{ id: uuidv4(), name: "Name", amount: "1 Tbs" }],
    };

    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <>
      <RecipeList
        recipes={recipes}
        handleRecipeAdd={handleRecipeAdd}
        handleRecipeDelete={handleRecipeDelete}
      />
    </>
  );
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    cookTime: "1:45",
    servings: 3,
    instructions:
      "Instructions: \n1.Put salt on Chicken \n2. Put Chicken in oven \n3. Eat Chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: "1 Pounds",
      },
    ],
  },
  {
    id: 2,
    name: "Plain Fish",
    cookTime: "0:45",
    servings: 1,
    instructions:
      "Instructions: \n1.Put salt on Fish \n2. Put Fish in oven \n3. Eat Fish",
    ingredients: [
      {
        id: 1,
        name: "Fish",
        amount: "2 Pounds",
      },
      {
        id: 2,
        name: "Salt",
        amount: ".5 Pounds",
      },
    ],
  },
];
