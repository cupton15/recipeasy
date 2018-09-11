import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';
import { AuthConsumer } from '../../contexts/AuthContext';
import UserDropDown from '../UserDropDown/UserDropDown';

const NavBar = () => {
  return (
    <AuthConsumer>
      {auth => (
        <div className="nav-bar">
          <Link to="/">
            <h1 className="app-title">Recipeasy</h1>
          </Link>
          { auth.isAuth ? (
            <div className="nav-items">
              <UserDropDown logout={auth.logout} />
            </div>
            ) : (
              <div className="nav-items">
                <Link to="/register">
                  <span>register</span>
                </Link>
                <Link to="/login">
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
