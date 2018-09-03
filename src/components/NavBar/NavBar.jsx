import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import { AuthConsumer } from '../../contexts/AuthContext';

const NavBar = () => {
  return (
    <AuthConsumer>
      {({ isAuth, login }) => (
        <div className="nav-bar">
          <Link to="/">
            <h1 className="app-title">Recipeasy</h1>
          </Link>
          { isAuth ? (
            <div className="nav-items">
              <span>logged in</span>
            </div>
            ) : (
              <div className="nav-items">
                <Link to="/register">
                  <span>register</span>
                </Link>
                <Link to={{ pathname: '/login', search: '', hash: '', state: { login } }}>
                  <span>login</span>
                </Link>
              </div>
            )
            }
        </div>
      )}
    </AuthConsumer>
  );
};

export default NavBar;
