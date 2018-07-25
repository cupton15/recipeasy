import React from 'react';
import { shallow } from 'enzyme';

import RecipeTile from './RecipeTile';
import RecipeDetails from '../RecipeDetails/RecipeDetails';

describe('<RecipeTile />', () => {
  let wrapper;

  beforeEach(() => {
    const recipe = {
      uri: 1,
      image: 'image',
      source: 'source',
      label: 'label',
    };
    wrapper = shallow(<RecipeTile recipe={recipe} />);
  });

  it('should show recipe details when clicked', () => {
    const button = wrapper.find('button');
    button.simulate('click');

    expect(wrapper.containsMatchingElement(RecipeDetails)).toEqual(true);
  });
});
