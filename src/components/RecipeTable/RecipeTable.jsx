import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import RecipeTile from '../RecipeTile/RecipeTile';
import './RecipeTable.css';

class RecipeTable extends Component {
  constructor(props) {
    super(props);

    const chunkSize = 9;
    const chunkedItems = [];
    for (let i = 0; i < this.props.recipes.length; i += chunkSize) {
      const chunk = this.props.recipes.slice(i, i + chunkSize);
      chunkedItems.push(chunk);
    }
    this.state = {
      tableItems: [],
      chunkedItems,
      selectedSection: 0,
    };

    this.updateTable = this.updateTable.bind(this);
    this.prevChunk = this.prevChunk.bind(this);
    this.nextChunk = this.nextChunk.bind(this);
  }

  componentDidMount() {
    this.updateTable();
  }

  updateTable() {
    const items = this.state.chunkedItems[this.state.selectedSection].map(recipe =>
      <RecipeTile key={recipe.uri} recipe={recipe} />);

    this.setState({
      tableItems: items,
    });
  }

  prevChunk() {
    if (this.state.selectedSection > 0) {
      this.setState({
        selectedSection: this.state.selectedSection - 1,
      }, () => {
        this.updateTable();
      });
    }
  }

  nextChunk() {
    if (this.state.selectedSection < this.state.chunkedItems.length - 1) {
      this.setState({
        selectedSection: this.state.selectedSection + 1,
      }, () => {
        this.updateTable();
      });
    }
  }

  render() {
    const prevButton = (
      <button className="grow button previous" onClick={() => this.prevChunk()}>
        <FontAwesomeIcon icon="caret-left" size="8x" />
      </button>
    );

    const nextButton = (
      <button className="grow button next" onClick={() => this.nextChunk()}>
        <FontAwesomeIcon icon="caret-right" size="8x" />
      </button>
    );

    return (
      <div className="container">
        { this.state.selectedSection > 0 ? prevButton : '' }
        <div className="table-container">
          <div className="recipe-table">
            { this.state.tableItems }
          </div>
        </div>
        { this.state.selectedSection < this.state.chunkedItems.length - 1 ? nextButton : ''}
      </div>
    );
  }
}

RecipeTable.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
  })).isRequired,
};

export default RecipeTable;
