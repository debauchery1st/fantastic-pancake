import React, { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import { getRecipes } from "./api-model";

export default function App() {
  const [state, setState] = useState({
    recipes: [],
    loaded: false
  });
  useEffect(() => {
    !state.loaded &&
      getRecipes().then(res =>
        setState({ ...state, recipes: res.data, loaded: true })
      );
  }, [state]);
  return (
    <div className="App">
      <h1>Recipes</h1>
      <RecipeList recipes={state.recipes} />
    </div>
  );
}
