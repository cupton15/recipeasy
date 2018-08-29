import React from 'react';
import { shallow } from 'enzyme';

import Register from './Register';
import Button from '../Core/Button/Button';

describe('<Register />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Register />);
  });

  it('should disable the submit button by default', () => {
    const button = wrapper.find(Button);
    expect(button.props().disabled).toEqual(true);
  });

  it('should enable the submit button if all values are entered correctly', () => {
    wrapper.setState({
      email: 'test@test.com',
      displayName: 'test',
      password: 'testPassword123',
    });

    const button = wrapper.find(Button);
    expect(button.props().disabled).toEqual(false);
  });

  it('should show the user they have entered a capital in their password', () => {
    wrapper.setState({
      password: 'T',
    });

    const node = wrapper.find('li[children="password contains at least one capital"]');
    expect(node.hasClass('active')).toEqual(true);
  });

  it('should show the user they have entered a lower case letter in their password', () => {
    wrapper.setState({
      password: 't',
    });

    const node = wrapper.find('li[children="password contains at least one lower case letter"]');
    expect(node.hasClass('active')).toEqual(true);
  });

  it('should show the user they have entered a number in their password', () => {
    wrapper.setState({
      password: '5',
    });

    const node = wrapper.find('li[children="password contains at least one number"]');
    expect(node.hasClass('active')).toEqual(true);
  });

  it('should show the user their password is the correct length', () => {
    wrapper.setState({
      password: '1234567',
    });

    const node = wrapper.find('li[children="password is at least 7 characters long"]');
    expect(node.hasClass('active')).toEqual(true);
  });
});
