import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = (props) => {
  let button = null;

  switch (props.type) {
    case ('submit'):
      button = <button type="submit" disabled={props.disabled}>{props.text}</button>;
      break;
    default:
      button = <button disabled={props.disabled}>{props.text}</button>;
  }

  return (<div className="custom-button"> {button} </div>);
};

export default Button;

Button.defaultProps = {
  type: '',
  disabled: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};
