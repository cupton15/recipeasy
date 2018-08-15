import React from 'react';

import Form from '../Core/Form/Form';
import Input from '../Core/Input/Input';
import Button from '../Core/Button/Button';

const Register = () => {
  return (
    <Form title="Register">
      <Input label="email" name="email" type="email" />
      <Input label="display name" name="displayName" type="input" />
      <Input label="password" name="password" type="password" showstrength={1} />
      <Input label="confirm password" name="confirmPassword" type="password" />
      <Button type="submit" text="Register" />
    </Form>
  );
};

export default Register;
