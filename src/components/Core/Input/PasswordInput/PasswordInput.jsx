import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './PasswordInput.css';

class PasswordInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'password',
      value: '',
    };

    this.showHide = this.showHide.bind(this);
  }

  showHide(event) {
    event.preventDefault();
    event.stopPropagation();

    this.setState({
      type: this.state.type === 'password' ? 'input' : 'password',
    });
  }

  updateValue(event) {
    event.preventDefault();
    event.stopPropagation();

    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const attr = Object.assign({}, this.props, { type: this.state.type });
    const showHideIcon = this.state.type === 'password'
      ? <FontAwesomeIcon icon="eye" size="2x" />
      : <FontAwesomeIcon icon="eye-slash" size="2x" />;

    return (
      <div className="password">
        <input {...attr} value={this.state.value} onChange={event => this.updateValue(event)} />
        <button className="show-hide-icon" onClick={this.showHide}>
          { this.state.value !== '' ? showHideIcon : '' }
        </button>
      </div>
    );
  }
}

export default PasswordInput;
