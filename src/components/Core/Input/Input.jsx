import React from 'react';
import PropTypes from 'prop-types';

import PasswordInput from './PasswordInput/PasswordInput';
import './Input.css';

const Input = (props) => {
  let input = null;

  switch (props.type) {
    case ('password'):
      input = <PasswordInput {...props} />;
      break;
    default:
      input = <input {...props} />;
  }

  return (
    <div className="input-area">
      <label>{props.label}</label>
      {input}
    </div>
  );
};

Input.defaultProps = {
  label: '',
  type: '',
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default Input;
