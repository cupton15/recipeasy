import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import zxcvbn from 'zxcvbn';

import './PasswordInput.css';

class PasswordInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: 'password',
      value: '',
      passwordStrength: 'weak',
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
    
    const passwordResult = zxcvbn(event.target.value);
    let passwordStrength = '';

    if (passwordResult.score > 3) {
      passwordStrength = 'strong';
    } else if (passwordResult.score > 1) {
      passwordStrength = 'medium';
    } else {
      passwordStrength = 'weak';
    }

    if (this.props.onChange) {
      this.props.onChange(event);
    }

    this.setState({
      value: event.target.value,
      passwordStrength,
    });
  }

  render() {
    const attr = Object.assign({}, this.props, { type: this.state.type });
    const showHideIcon = this.state.type === 'password'
      ? <FontAwesomeIcon icon="eye" size="2x" />
      : <FontAwesomeIcon icon="eye-slash" size="2x" />;

    const passwordStrength = (
      <CSSTransition in={this.state.value !== ''} classNames="password-transition" timeout={300} mountOnEnter unmountOnExit>
        <div className={`password-strength ${this.state.passwordStrength}`} >{this.state.passwordStrength}</div>
      </CSSTransition>
    );

    return (
      <div>
        <div className="password">
          <input {...attr} className="password-input" value={this.state.value} onChange={event => this.updateValue(event)} />
          { this.state.value !== '' ?
            <button className="show-hide-icon" onClick={this.showHide}>
              { this.state.value !== '' ? showHideIcon : null }
            </button>
          : ''
          }
        </div>
        {this.props.showstrength ? passwordStrength : ''}
      </div>
    );
  }
}

PasswordInput.defaultProps = {
  showstrength: 0,
};

PasswordInput.propTypes = {
  showstrength: PropTypes.number,
};

export default PasswordInput;
