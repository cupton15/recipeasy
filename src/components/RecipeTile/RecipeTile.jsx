import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecipeTile.css';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import OutsideAlerter from '../Core/OutsideAlerter';

class RecipeTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    };

    this.toggleOpened = this.toggleOpened.bind(this);
  }

  toggleOpened() {
    this.setState(prevState => ({
      opened: !prevState.opened,
    }));
  }

  render() {
    const style = {
      backgroundImage: `url(${this.props.recipe.image})`,
    };

    const recipeDetails = (this.state.opened
      ? (
        <div className="full-screen">
          <OutsideAlerter event={() => this.toggleOpened()}>
            <RecipeDetails recipe={this.props.recipe} onClose={this.toggleOpened} />
          </OutsideAlerter>
        </div>
      )
      : null);

    return (
      <div>
        <button className="recipe-tile grow shadow full-image-background" style={style} onClick={() => this.toggleOpened()}>
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
