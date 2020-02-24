import React, { useState, useEffect } from "react";
import RecipeList from "./components/RecipeList";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function App() {
  const [state, setState] = useState({
    recipes: [],
    loaded: false
  });
  useEffect(() => {
    console.log(BASE_URL);
    !state.loaded &&
      axios.get(`${BASE_URL}/recipes`).then(res => {
        const { data } = res;
        console.log(data);
        setState({ ...state, recipes: res.data, loaded: true });
      });
  }, [state]);
  return (
    <div className="App">
      <h1>Recipes</h1>
      <RecipeList recipes={state.recipes} />
    </div>
  );
}
