import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './SearchBar.css';

const SearchBar = ({
  placeholder, onSubmit, onChange, loading,
}) => {
  const handleChange = (event) => {
    onChange(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const icon = loading ? (
    <FontAwesomeIcon icon="circle-notch" size="2x" spin />
  ) : (
    <FontAwesomeIcon icon="search" size="2x" />
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder={placeholder} onChange={handleChange} />
      <button className="search-button" type="submit">
        {icon}
      </button>
    </form>
  );
};

SearchBar.defaultProps = {
  placeholder: '',
  loading: false,
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default SearchBar;
