import React from "react";
import RecipeTable from "./components/RecipeTable";
import "./App.css"; 
function App() {
  return (
    <div className="app-container">
      <div className="header">
      <img src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/pot-of-food.png"
      alt="Recipe Icon" className="recipe-icon" />
      <h1>Recipe Explorer</h1>
      </div>
      <RecipeTable />
    </div>
  );
}

export default App;
