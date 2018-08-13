import React from 'react';

import Input from '../Core/Input/Input';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container shadow-right">
      <h1>Login</h1>
      <form className="login-form">
        <Input label="email" name="email" type="email" />
        <Input label="password" name="password" type="password" />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
