import React from 'react';
import PropTypes from 'prop-types';

import './Form.css';

const Form = (props) => {
  return (
    <div className="form-container shadow-right">
      <h1>{props.title}</h1>
      <form className="form">
        { props.children }
      </form>
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Form;
