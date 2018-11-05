import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.scss';


const Form = (props) => {
  return (
    <div className={`${styles.formContainer} shadow-right`}>
      <h1>{props.title}</h1>
      <form className={styles.form} onSubmit={props.onSubmit}>
        { props.children }
      </form>
    </div>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Form;
