import React, { Component } from 'react';

import Form from '../Core/Form/Form';
import Input from '../Core/Input/Input';
import Button from '../Core/Button/Button';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      displayName: '',
      password: '',
      passwordConfirm: '',
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
    return (
      <Form title="Register" onSubmit={this.handleSubmit}>
        <Input label="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} required />
        <Input label="display name" name="displayName" type="input" value={this.state.displayName} onChange={this.handleChange} required />
        <Input label="password" name="password" type="password" showstrength={1} value={this.state.password} onChange={this.handleChange} required />
        <Input label="confirm password" name="passwordConfirm" type="password" value={this.state.passwordConfirm} onChange={this.handleChange} required />
        <Button type="submit" text="Register" />
      </Form>
    );
  }
}

export default Register;
