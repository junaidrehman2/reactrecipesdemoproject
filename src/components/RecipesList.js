import React from 'react';
import PropTypes from 'prop-types';

const RecipesList = props => {
  const { style, recipes } = props;
  return (
    <ul style={style} className="list-reset">
      {recipes.map(recipe => (
        <li
          className="py2 border-bottom border-bottom-dashed pointer"
          key={recipe.id}
          onClick={() => props.onRecipeClick(recipe.id)}
        >
          <span
            className="p1"
            role="img"
            onClick={e => {
              e.stopPropagation();
              props.favoriteChanged(recipe.id);
            }}
          >
            {props.favorites.includes(recipe.id) ? '☑️' : '⬜️'}
          </span>
          <span>{recipe.name}</span>
          <span>{recipe.category}</span>
        </li>
      ))}
    </ul>
  );
};

RecipesList.prototypes = {
  recipe: PropTypes.object,
  recipes: PropTypes.array,
  className: PropTypes.string,
  style: PropTypes.object,
  onRecipeClick: PropTypes.func,
};

export default RecipesList;
