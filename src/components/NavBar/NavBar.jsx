import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './NavBar.css';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <h1 className="App-title">Recipeasy</h1>
      <div className="nav-items">
        <Link to="/login">
          <span>Login</span>
          <FontAwesomeIcon icon="user" size="2x" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
