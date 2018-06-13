import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './RecipeTile.css';

const RecipeTile = ({ recipe }) => {
  const style = {
    backgroundImage: `url(${recipe.image})`,
  };

  return (
    <Link to="/recipe" className="recipe-tile grow shadow" style={style}>
      <div className="text-container"><span className="tile-text">{ recipe.label }</span></div>
      <div className="text-container"><span className="tile-text">{ recipe.source }</span></div>
    </Link>
  );
};

RecipeTile.propTypes = {
  recipe: PropTypes.shape({
    label: PropTypes.string,
    image: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
};

export default RecipeTile;
