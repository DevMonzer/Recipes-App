import React from "react";

export default function Ingredient(ingredient) {
  const { name, amount } = ingredient;

  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  );
}
