import React from "react";
import Header from "./Header";
import RecipeDetails from "./RecipeDetails";
import RecipesList from "./RecipesList";

fetch(`${API_URL}/v1/recipes`)
  .then(res => res.json())
  .then(json => console.log(json));

const App = () => (
  <div>
    <Header />
    <main style={{ display: "flex" }}>
      <RecipesList style={{ flex: 3 }} />
      <RecipeDetails style={{ flex: 5 }} />
    </main>
  </div>
);

export default App;
