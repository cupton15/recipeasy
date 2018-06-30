import React from 'react';
import PropTypes from 'prop-types';
import './RecipeDetails.css';

const RecipeDetails = (props) => {
  const style = {
    backgroundImage: `url(${props.recipe.image})`,
  };

  return (
    <article className="details-body">
      <header className="details-header full-image-background" style={style}>
        <h1>{ props.recipe.label }</h1>
      </header>
      <div className="details-content">
        <div className="grid-layout">
          <div className="grid-item grow shadow">Ingredients</div>
          <div className="grid-item grow shadow">Method</div>
        </div>
      </div>
    </article>
  );
};

RecipeDetails.propTypes = {
  recipe: PropTypes.shape({
    label: PropTypes.string,
    image: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
};

export default RecipeDetails;
