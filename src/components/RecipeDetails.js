import React from 'react';
import PropTypes from 'prop-types';

const RecipeDetails = props => {
  const { currentRecipe, style } = props;
  if (currentRecipe === null) {
    return (
      <p style={style} className="h3 p2 ml4 bg-white italic center">
        Please click on a recipe
      </p>
    );
  }
  return (
    <div style={style} className="p2 ml4 bg-white">
      <h2 className="h2">{currentRecipe.name}</h2>
      <img alt="recipeImage" className="fit" src={currentRecipe.image} />
      <div>
        <span>{currentRecipe.category}</span>
        <span>{currentRecipe.calories}</span>
      </div>
      <h3>Ingredients</h3>
      <ul>
        {currentRecipe.ingredients.map(ing => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>
      <h3>steps</h3>
      <ol>
        {currentRecipe.steps.map(ing => (
          <li key={ing}>{ing}</li>
        ))}
      </ol>
    </div>
  );
};

RecipeDetails.prototypes = {
  currentRecipe: PropTypes.object,
  recipe: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default RecipeDetails;
