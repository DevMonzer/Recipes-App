import React from "react";

export default function Ingredients({ ingredients }) {
  return (
    <div>
      <span>{ingredients.name}</span>
      <span>{ingredients.amount}</span>
    </div>
  );
}
