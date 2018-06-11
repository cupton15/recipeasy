import React from 'react';
import SearchBar from './SearchBar';
import { shallow } from 'enzyme';

const onSubmit = () => {};
const onChange = () => {};

it('shows provided placeholder', () => {
  const wrapper = shallow(<SearchBar placeholder="test" onSubmit={onSubmit} onChange={onChange} />);
  const searchBar = wrapper.find('input');
  expect(searchBar.prop('placeholder')).toEqual('test');
});

it('should not show a placeholder if none provided', () => {
  const wrapper = shallow(<SearchBar onSubmit={onSubmit} onChange={onChange} />);
  const searchBar = wrapper.find('input');
  expect(searchBar.prop('placeholder')).toBeUndefined();
});

it('it should show the loading spinner', () => {
  const loading = true;
  const wrapper = shallow(<SearchBar onSubmit={onSubmit} onChange={onChange} loading={loading} />);
  const icon = wrapper.find('FontAwesomeIcon');
  expect(icon.prop('icon')).toEqual('circle-notch');
});
