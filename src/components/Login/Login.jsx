import React from 'react';

import Form from '../Core/Form/Form';
import Input from '../Core/Input/Input';
import Button from '../Core/Button/Button';

const Login = () => {
  return (
    <Form title="Login">
      <Input label="email" name="email" type="email" />
      <Input label="password" name="password" type="password" />
      <Button type="submit" text="Log In" />
    </Form>
  );
};

export default Login;
