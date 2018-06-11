import React from 'react';
import PropTypes from 'prop-types';
import './RecipeTile.css';

const RecipeTile = ({ recipe }) => (
  <div className="recipe-tile">{ recipe.label }</div>
);

RecipeTile.propTypes = {
  recipe: PropTypes.shape({
    label: PropTypes.string,
  }).isRequired,
};

export default RecipeTile;
