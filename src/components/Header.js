import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    className="p1 mx2 black rounded text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    {children}
  </NavLink>
);

const Header = () => (
  <header className="flex items-center justify-between px4">
    <h1 className="h1">🍽 My Recipes</h1>
    <HeaderLink exact to="/">
      Home
    </HeaderLink>
    <HeaderLink exact to="/favorites">
      Favorites
    </HeaderLink>
  </header>
);

export default Header;
