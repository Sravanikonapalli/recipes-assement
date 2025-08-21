import React from "react";

const RecipeDrawer = ({ recipe, onClose }) => {
  return (
    <div className="recipe-drawer">
      <button onClick={onClose}>Close</button>
      <h2>{recipe.title}</h2>
      <p>{recipe.cuisine}</p>
      <p>{recipe.description}</p>
      <p><strong>Total Time:</strong> {recipe.total_time} mins</p>
      <h3>Nutrients</h3>
      <pre>{JSON.stringify(recipe.nutrients, null, 2)}</pre>
    </div>
  );
};

export default RecipeDrawer;
