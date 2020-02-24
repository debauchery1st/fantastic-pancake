import React from "react";
import Recipe from "./Recipe";

const RecipeList = ({ recipes }) => {
  return (
    <div className="RecipeList">
      {recipes.map(rcp => (
        <Recipe key={rcp.id} {...rcp} />
      ))}
    </div>
  );
};

export default RecipeList;
