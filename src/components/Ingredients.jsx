import React from "react";

export default function Ingredients({ ingredients }) {
  const { name, amount } = ingredients;

  return (
    <div>
      <span>{name}</span>
      <span>{amount}</span>
    </div>
  );
}
