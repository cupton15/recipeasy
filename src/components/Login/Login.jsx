import React, { Component } from 'react';

import Form from '../Core/Form/Form';
import Input from '../Core/Input/Input';
import Button from '../Core/Button/Button';
import { AuthConsumer } from '../../contexts/AuthContext';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(func) {
    return (event) => {
      event.preventDefault();

      const data = this.state;
      fetch('http://localhost:3300/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then((response) => {
          func();
        })
        .catch(error => console.error('Error:', error));
    };
  }

  render() {
    return (
      <AuthConsumer>
        {({ isAuth, login, logout }) => (
          <Form title="Login" onSubmit={this.handleSubmit(login)}>
            <Input
              label="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <Input
              label="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <Button type="submit" text="Log In" />
          </Form>
        )}
      </AuthConsumer>
    );
  }
}

export default Login;
