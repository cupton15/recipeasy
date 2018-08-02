import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

const onSubmit = () => {};
const onChange = () => {};

describe('<SearchBar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar onSubmit={onSubmit} onChange={onChange} value="" />);
  });


  it('shows provided placeholder', () => {
    wrapper.setProps({
      placeholder: 'test',
    });

    const searchBar = wrapper.find('input');
    expect(searchBar.prop('placeholder')).toEqual('test');
  });

  it('should not show a placeholder if none provided', () => {
    const searchBar = wrapper.find('input');
    expect(searchBar.prop('placeholder')).toEqual('');
  });

  it('it should show the loading spinner', () => {
    wrapper.setProps({
      loading: true,
    });
    const icon = wrapper.find('FontAwesomeIcon');
    expect(icon.prop('icon')).toEqual('circle-notch');
  });
});

