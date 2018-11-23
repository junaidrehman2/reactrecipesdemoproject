import React from 'react';
import RecipeDetails from './RecipeDetails';

class Recipe extends React.Component {
  constructor() {
    super();
    this.state = {
      recipe: null,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => this.setState({ recipe }));
  }

  render() {
    const { recipe } = this.state;
    return (
      <div>
        <h2 className="px4">RecipeDetails</h2>
        <RecipeDetails currentRecipe={recipe} />
      </div>
    );
  }
}

export default Recipe;
