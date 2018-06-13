import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import RecipeTable from '../RecipeTable/RecipeTable';
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
        console.log(recipes);
        this.setState({
          loading: false,
          recipes,
        });
      });
  }

  render() {
    const recipesFound = this.state.recipes.length;
    const recipeTable = <RecipeTable recipes={this.state.recipes} />;

    return (
      <div className="recipe-search">
        <SearchBar placeholder="search recipes..." onSubmit={this.handleSubmit} onChange={this.handleChange} loading={this.state.loading} />
        { recipesFound ? recipeTable : '' }
      </div>
    );
  }
}

export default RecipeSearch;