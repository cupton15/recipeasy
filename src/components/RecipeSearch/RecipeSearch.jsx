import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import SearchBar from '../Core/SearchBar/SearchBar';
import RecipeTable from '../RecipeTable/RecipeTable';
import styles from './RecipeSearch.module.scss';

class RecipeSearch extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      searchText: '',
      recipes: [],
      showTable: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchText: event.target.value });
  }

  handleSubmit() {
    this.setState({
      loading: true,
      showTable: false,
    });

    fetch(`https://api.edamam.com/search?q=${this.state.searchText}&app_id=ee2c97b8&app_key=44632bb36639b1e9d9c9a071b00fca22&to=99`)
      .then(response => response.json())
      .then((response) => {
        const recipes = response.hits.map(hit => hit.recipe);
        this.setState({
          loading: false,
          recipes,
          showTable: true,
        });
      });
  }

  render() {
    const recipeTable = <RecipeTable recipes={this.state.recipes} />;

    return (
      <div className={styles.recipeSearch}>
        <SearchBar
          value={this.state.searchText}
          placeholder="search recipes..."
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          loading={this.state.loading}
        />
        <CSSTransition in={this.state.showTable} classNames={styles} timeout={500} unmountOnExit>
          { recipeTable }
        </CSSTransition>
      </div>
    );
  }
}

export default RecipeSearch;
