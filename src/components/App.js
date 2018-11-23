import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Header from './Header';
import NotFound from './NotFound';
import Recipe from './Recipe';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      favorites: [],
    };

    this.favoriteToggle = this.favoriteToggle.bind(this);
  }

  componentDidMount() {
    fetch(`${API_URL}/v1/recipes`)
      .then(res => res.json())
      .then(recipes => this.setState({ recipes }));
  }

  favoriteToggle(id) {
    this.setState(({ favorites, ...state }) => {
      const idx = favorites.indexOf(id);

      if (idx !== -1) {
        return { ...state, favorites: favorites.filter(f => f !== id) };
      }

      return { ...state, favorites: [...favorites, id] };
    });
  }

  render() {
    const { recipes, favorites } = this.state;
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Switch>
            <Redirect from="/home" to="/" />
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  recipes={recipes}
                  favorites={favorites}
                  toggleFavorites={this.favoriteToggle}
                />
              )}
            />
            <Route
              exact
              path="/favorites"
              render={() => (
                <Favorites
                  state={this.state}
                  toggleFavorites={this.favoriteToggle}
                />
              )}
            />
            <Route path="/recipe/:id" component={Recipe} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
