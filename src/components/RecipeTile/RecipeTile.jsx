import React from 'react';
import PropTypes from 'prop-types';
import './RecipeTile.css';

const RecipeTile = ({ recipe }) => {
  const style = {
    backgroundImage: `url(${recipe.image})`,
  };

  return (
    <div className="recipe-tile" style={style}>{ recipe.label }</div>
  );
};

RecipeTile.propTypes = {
  recipe: PropTypes.shape({
    label: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default RecipeTile;
