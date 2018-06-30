import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecipeTile.css';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

class RecipeTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState(prevState => ({
      clicked: !prevState.clicked,
    }));
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.recipe.image})`,
    };

    const recipeDetails = (this.state.clicked
      ? (
        <div className="full-screen" onClick={() => this.onClick()}>
          <RecipeDetails recipe={this.props.recipe} />
        </div>
      )
      : null);

    return (
      <div>
        <button className="recipe-tile grow shadow full-image-background" style={style} onClick={() => this.onClick()}>
          <div className="text-container"><div className="tile-text">{ this.props.recipe.label }</div></div>
          <div className="text-container"><div className="tile-text">{ this.props.recipe.source }</div></div>
        </button>
        {recipeDetails}
      </div>
    );
  }
}

RecipeTile.propTypes = {
  recipe: PropTypes.shape({
    label: PropTypes.string,
    image: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
};

export default RecipeTile;
