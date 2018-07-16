import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RecipeTable from '../RecipeTable/RecipeTable';
import OutsideAlerter from '../Core/OutsideAlerter';
import './RecipeSearch.css';

class RecipeSearch extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      searchText: '',
      recipes: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleSubmit() {
    this.setState({ loading: true });

    fetch(`https://api.edamam.com/search?q=${this.state.searchText}&app_id=ee2c97b8&app_key=44632bb36639b1e9d9c9a071b00fca22&to=9`)
      .then(response => response.json())
      .then((response) => {
        const recipes = response.hits.map(hit => hit.recipe);
        this.setState({
          loading: false,
          recipes,
        });
      });
  }

  handleOutsideClick() {
    this.setState({
      recipes: [],
      searchText: '',
    });
  }

  render() {
    const recipesFound = this.state.recipes.length;
    const recipeTable = <RecipeTable recipes={this.state.recipes} />;

    return (
      <div className="recipe-search">
        <OutsideAlerter event={this.handleOutsideClick}>
          <SearchBar
            value={this.state.searchText}
            placeholder="search recipes..."
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            loading={this.state.loading}
          />
          { recipesFound ? recipeTable : '' }
        </OutsideAlerter>
      </div>
    );
  }
}

export default RecipeSearch;
