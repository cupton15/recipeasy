import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <h1 className="app-title">Recipeasy</h1>
      </Link>
      <div className="nav-items">
        <Link to="/register">
          <span>register</span>
        </Link>
        <Link to="/login">
          <span>login</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
