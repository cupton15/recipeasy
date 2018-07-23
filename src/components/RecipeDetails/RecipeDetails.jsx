import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './RecipeDetails.css';

const RecipeDetails = (props) => {
  const style = {
    backgroundImage: `url(${props.recipe.image})`,
  };

  const ingredients = props.recipe.ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient.text}</li>;
  });

  const onClose = () => props.onClose();

  return (
    <div className="recipe-details">
      <article className="details-body">
        <header className="details-header full-image-background rounded-corners" style={style}>
          <div className="overlay rounded-corners">
            <button className="close-button" onClick={onClose}>
                close <FontAwesomeIcon icon="times" size="2x" />
            </button>
            <div className="details-content">
              <div className="main-details rounded-corners shadow">
                <h1>{ props.recipe.label }</h1>
                <a href={props.recipe.url} target="_blank" rel="noopener noreferrer">
                  { props.recipe.source }
                  <span className="visuallyhidden">, opens in a new window</span>
                </a>
                <div>Number of servings: {props.recipe.yield}</div>
                <div>Calories: {props.recipe.calories}</div>
              </div>
              <div className="ingredients rounded-corners shadow">
                <div>Ingredients</div>
                <ul>
                  {ingredients}
                </ul>
              </div>
            </div>
          </div>
        </header>
      </article>
    </div>
  );
};

RecipeDetails.propTypes = {
  recipe: PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    source: PropTypes.string,
    yield: PropTypes.number,
    calories: PropTypes.number,
    ingredients: PropTypes.array,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RecipeDetails;
