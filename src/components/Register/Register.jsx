import React, { Component } from 'react';

import Form from '../Core/Form/Form';
import Input from '../Core/Input/Input';
import Button from '../Core/Button/Button';

import './Register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      displayName: '',
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

  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    fetch('http://localhost:3300/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  render() {
    const {
      email, displayName, password,
    } = this.state;
    const containsNumber = /[0-9]/g.test(password);
    const containsCapital = /[A-Z]/g.test(password);
    const containsLowercase = /[a-z]/g.test(password);

    const enabled = email.length > 0
                    && displayName.length > 0
                    && password.length > 6
                    && containsNumber
                    && containsCapital
                    && containsLowercase;

    return (
      <Form title="Register" onSubmit={this.handleSubmit}>
        <Input label="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} autoFocus required />
        <Input label="display name" name="displayName" type="input" value={this.state.displayName} onChange={this.handleChange} required />
        <Input
          label="password"
          name="password"
          type="password"
          showstrength={1}
          value={this.state.password}
          onChange={this.handleChange}
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$"
          minLength="7"
          required
        />
        <ul className="password-criteria-list">
          <li className={`password-criteria ${password.length > 6 ? 'active' : ''}`}>password is at least 7 characters long</li>
          <li className={`password-criteria ${containsNumber ? 'active' : ''}`}>password contains at least one number</li>
          <li className={`password-criteria ${containsCapital ? 'active' : ''}`}>password contains at least one capital</li>
          <li className={`password-criteria ${containsLowercase ? 'active' : ''}`}>password contains at least one lower case letter</li>
        </ul>
        <Button type="submit" text="Register" disabled={!enabled} />
      </Form>
    );
  }
}

export default Register;
