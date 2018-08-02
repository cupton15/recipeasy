import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './SearchBar.css';

const SearchBar = (props) => {
  const handleChange = (event) => {
    props.onChange(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit();
  };

  const icon = props.loading ? (
    <FontAwesomeIcon icon="circle-notch" size="2x" spin />
  ) : (
    <FontAwesomeIcon icon="search" size="2x" />
  );

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={props.value} placeholder={props.placeholder} onChange={handleChange} />
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
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default SearchBar;
