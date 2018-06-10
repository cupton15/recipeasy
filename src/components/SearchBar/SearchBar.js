import React from 'react';
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './SearchBar.css';

const SearchBar = ({placeholder, onSubmit, loading}) => {
    let inputValue;

    const handleChange = (event) => {
        inputValue = event.target.value;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputValue);
    }

    const icon = loading ? (
        <FontAwesomeIcon icon="circle-notch" size="2x" spin></FontAwesomeIcon>
    ) : (
        <FontAwesomeIcon icon="search" size="2x"></FontAwesomeIcon>
    );

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={placeholder} onChange={handleChange}/> 
            <button className="search-button" type="submit">
                {icon}
            </button>
        </form>
    );
}

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

export default SearchBar;