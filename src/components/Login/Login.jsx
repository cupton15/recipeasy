import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

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
      loggedIn: false,
      errors: {},
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
          if (response.errors) {
            this.setState({
              errors: response.errors,
            });
          } else {
            func(response);
            this.setState({
              loggedIn: true,
            });
          }
        })
        .catch(error => console.error('Error:', error));
    };
  }

  render() {
    const {
      email, password, loggedIn, errors,
    } = this.state;

    const enabled = email.length > 0 && password.length > 0;

    if (loggedIn) {
      return <Redirect to={{ pathname: '/' }} />;
    }

    return (
      <AuthConsumer>
        {({ isAuth, login, logout }) => (
          <Form title="Login" onSubmit={this.handleSubmit(login)}>
            {errors.length ? (
              <div className="errors">
                {this.state.errors.map((err, index) => <span key={index}>{err.errorMessage}</span>)}
              </div>
            ) : ''}
            <Input
              label="email"
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
            />
            <Input
              label="password"
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
            />
            <Button type="submit" text="Log In" disabled={!enabled} />
          </Form>
        )}
      </AuthConsumer>
    );
  }
}

export default Login;
