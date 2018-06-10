import React from 'react';
import SearchBar from './SearchBar';
import { shallow }  from 'enzyme';

it('SearchBar shows provided placeholder', () => {
    const wrapper = shallow(
        <SearchBar placeholder="test"></SearchBar>
    );
    const searchBar = wrapper.find('input');
    expect(searchBar.prop('placeholder')).toEqual('test');
})

it('SearchBar should not show a placeholder if none provided', () => {
    const wrapper = shallow(
        <SearchBar></SearchBar>
    );
    const searchBar = wrapper.find('input');
    expect(searchBar.prop('placeholder')).toBeUndefined();
})