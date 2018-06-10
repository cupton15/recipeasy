import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar';

class RecipeSearch extends Component {
    constructor() {
        super();
        this.state = { loading: false }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(searchString) {
        this.setState({ loading: true });
        
        
        fetch(`https://api.edamam.com/search?q=${searchString}&app_id=ee2c97b8&app_key=44632bb36639b1e9d9c9a071b00fca22`)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
            });
    }

    render() {
        return(
            <div>
                <SearchBar placeholder="search recipes..." onSubmit={this.handleSubmit} loading={this.state.loading}></SearchBar>
            </div>
        )
    }
}

export default RecipeSearch;