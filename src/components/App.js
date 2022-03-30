import React from "react";
import RecipeList from "./RecipeList";

export default function App() {
  return (
    <>
      <RecipeList recipes={sampleRecipes} />
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
  },
  {
    id: 2,
    name: "Plain Fish",
    cookTime: "0:45",
    servings: 1,
    instructions:
      "Instructions: \n1.Put salt on Fish \n2. Put Fish in oven \n3. Eat Fish",
  },
];
