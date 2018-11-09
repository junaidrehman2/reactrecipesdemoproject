import React from 'react';
import RecipeDetails from './RecipeDetails';
import RecipesList from './RecipesList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      currentRecipe: null,
    };

    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => this.setState({ recipes }));
  }

  onRecipeClick(id) {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => this.setState({ currentRecipe: recipe }));
  }

  render() {
    const { recipes, currentRecipe } = this.state;
    return (
      <div>
        <main className="px4 flex">
          <RecipesList
            onRecipeClick={this.onRecipeClick}
            recipes={recipes}
            style={{ flex: 3 }}
          />
          <RecipeDetails currentRecipe={currentRecipe} style={{ flex: 5 }} />
        </main>
      </div>
    );
  }
}

export default Home;
