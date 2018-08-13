import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  let button = null;

  switch (props.type) {
    case ('submit'):
      button = <button type="submit">{props.text}</button>;
      break;
    default:
      button = <button>{props.text}</button>;
  }

  return ({ button });
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
