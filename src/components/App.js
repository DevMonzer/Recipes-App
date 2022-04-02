import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";
import uuidv4 from "uuid/v4";
import RecipeEdit from "./RecipeEdit";

// Creating a context to avoid props drillings
export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = "cookingWithReact.recipes";

export default function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);
  // Getting the data out the local storage
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON));
  }, []);

  // Setting the data into the local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  const RecipeValues = {
    handleRecipeAdd: handleRecipeAdd,
    handleRecipeDelete: handleRecipeDelete,
  };

  // If you wanna add a new recipe
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

  // If you wanna delete a recipe
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <>
      <RecipeContext.Provider value={RecipeValues}>
        <RecipeList recipes={recipes} />
        <RecipeEdit />
      </RecipeContext.Provider>
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
