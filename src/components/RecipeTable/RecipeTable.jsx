import React from 'react';
import PropTypes from 'prop-types';
import './RecipeTable.css';

const RecipeTable = ({ recipes }) => {
  const tableItems = recipes.map((recipe, index) => <div key={ index }>{recipe.label}</div>);

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
