import React from 'react';
import RecipesList from './RecipesList';

const Fav = ({ state, toggleFavorites }) => (
  <div>
    <h2 className="px4">Favorites</h2>
    <RecipesList
      recipes={state.recipes.filter(r => state.favorites.includes(r.id))}
      favorites={state.favorites}
      favoriteChanged={toggleFavorites}
    />
  </div>
);
export default Fav;
