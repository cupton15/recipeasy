import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar';

class RecipeSearch extends Component {
    constructor() {
        super();
        this.state = { loading: false }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log('clicked');
        this.setState({ loading: true });
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