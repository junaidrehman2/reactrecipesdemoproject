import React from 'react';
import RecipeDetails from './RecipeDetails';
import RecipesList from './RecipesList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      currentRecipe: null,
    };

    this.onRecipeClick = this.onRecipeClick.bind(this);
  }

  onRecipeClick(id) {
    fetch(`${API_URL}/v1/recipes/${id}`)
      .then(res => res.json())
      .then(recipe => this.setState({ currentRecipe: recipe }));
  }

  render() {
    const { toggleFavorites, recipes, favorites } = this.props;
    const { currentRecipe } = this.state;
    return (
      <div>
        <h2 className="px4"> RecipesList</h2>
        <main className="px4 flex">
          <RecipesList
            favorites={favorites}
            favoriteChanged={toggleFavorites}
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
