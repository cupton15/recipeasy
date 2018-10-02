import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss';
import { AuthConsumer } from '../../contexts/AuthContext';
import UserDropDown from '../UserDropDown/UserDropDown';

const NavBar = () => {
  return (
    <AuthConsumer>
      {auth => (
        <div className={styles.navBar}>
          <Link to="/">
            <h1 className={styles.appTitle}>Recipeasy</h1>
          </Link>
          { auth.isAuth ? (
            <div className={styles.navItems}>
              <UserDropDown logout={auth.logout} />
            </div>
            ) : (
              <div className={styles.navItems}>
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
