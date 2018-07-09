import React from 'react';
import PropTypes from 'prop-types';
import RecipeTile from '../RecipeTile/RecipeTile';
import './RecipeTable.css';

const RecipeTable = ({ recipes }) => {
  const tableItems = recipes.map(recipe =>
    <RecipeTile key={recipe.uri} recipe={recipe} />);

  return (
    <div className="recipe-table">
      { tableItems }
    </div>
  );
};

RecipeTable.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
  })).isRequired,
};

export default RecipeTable;
