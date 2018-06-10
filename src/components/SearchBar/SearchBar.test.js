import React from 'react';
import SearchBar from './SearchBar';
import { shallow }  from 'enzyme';
import FontAwesomeIcon from '@fortawesome/fontawesome';

const onSubmit = () => {};

it('shows provided placeholder', () => {
    const wrapper = shallow(
        <SearchBar placeholder="test" onSubmit={onSubmit}></SearchBar>
    );
    const searchBar = wrapper.find('input');
    expect(searchBar.prop('placeholder')).toEqual('test');
});

it('should not show a placeholder if none provided', () => {
    const wrapper = shallow(
        <SearchBar onSubmit={onSubmit}></SearchBar>
    );
    const searchBar = wrapper.find('input');
    expect(searchBar.prop('placeholder')).toBeUndefined();
});

it('it should show the loading spinner', () => {
    const loading = true;
    const wrapper = shallow(
        <SearchBar onSubmit={onSubmit} loading={loading}></SearchBar>
    );
    const icon = wrapper.find('FontAwesomeIcon');
    expect(icon.prop('icon')).toEqual('circle-notch');
});