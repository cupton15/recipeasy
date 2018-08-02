import React from 'react';

import './Login.css';

const Login = () => {
  return (
    <div className="login-container shadow-right">
      <h1>Login</h1>
      <form className="login-form">
        <input type="email" />
        <input type="password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
