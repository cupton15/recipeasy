import React from 'react';
import { shallow } from 'enzyme';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import zxcvbn from 'zxcvbn';
import PasswordInput from './PasswordInput';

jest.mock('zxcvbn', () => () => (jest.fn()));

describe('<PasswordInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PasswordInput />);
  });

  const enterText = (input) => {
    input.simulate('change', {
      preventDefault: () => {},
      stopPropagation: () => {},
      target: { value: 'test' },
    });
  };

  it('should not show the password icon if there is no value has been entered', () => {
    expect(wrapper.containsMatchingElement(<FontAwesomeIcon icon="eye" />)).toEqual(false);
  });

  it('should show the "show password" icon when a value is entered', () => {
    const input = wrapper.find('input');
    enterText(input);

    expect(wrapper.containsMatchingElement(<FontAwesomeIcon icon="eye" />)).toEqual(true);
  });

  it('should show the entered value as clear text if the icon is clicked', () => {
    const input = wrapper.find('input');
    enterText(input);

    const icon = wrapper.find('button.show-hide-icon');
    icon.simulate('click', {
      preventDefault: () => {},
      stopPropagation: () => {},
    });

    expect(wrapper.find('input').props().type).toEqual('input');

    expect(wrapper.containsMatchingElement(<FontAwesomeIcon icon="eye-slash" />)).toEqual(true);
  });

  it('should show the password strength if set', () => {
    wrapper.setProps({
      showstrength: 1,
    });

    const input = wrapper.find('input');
    enterText(input);

    expect(wrapper.containsMatchingElement(<div className="password-strength weak">weak</div>)).toEqual(true);
  });

  it('should show a medium indicator if a medium strength password has been set', () => {
    wrapper.setProps({
      showstrength: 1,
    });

    const input = wrapper.find('input');
    enterText(input);

    wrapper.setState({
      passwordStrength: 'medium',
    });

    expect(wrapper.containsMatchingElement(<div className="password-strength medium">medium</div>)).toEqual(true);
  });

  it('should show a strong indicator if a strong strength password has been set', () => {
    wrapper.setProps({
      showstrength: 1,
    });

    const input = wrapper.find('input');
    enterText(input);

    wrapper.setState({
      passwordStrength: 'strong',
    });

    expect(wrapper.containsMatchingElement(<div className="password-strength strong">strong</div>)).toEqual(true);
  });
});
