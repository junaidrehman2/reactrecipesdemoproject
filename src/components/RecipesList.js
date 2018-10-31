import React from 'react';
import PropTypes from 'prop-types';

const RecipesList = props => {
  const { style, recipes } = props;
  return (
    <div style={style}>
      <h2> RecipesList</h2>
      <ul className="list-reset">
        {recipes.map(recipe => (
          <li
            className="py2 border-bottom border-bottom-dashed pointer"
            key={recipe.id}
            onClick={() => props.onRecipeClick(recipe.id)}
          >
            <span>{recipe.name}</span>
            <span>{recipe.category}</span>
          </li>
        ))}
      </ul>
    </div>
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
