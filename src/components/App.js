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
