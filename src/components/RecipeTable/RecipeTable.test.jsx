import React from 'react';
import { shallow } from 'enzyme';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import RecipeTable from './RecipeTable';
import RecipeTile from '../RecipeTile/RecipeTile';

describe('<RecipeTable />', () => {
  let wrapper;

  beforeEach(() => {
    const recipes = [];
    for (let i = 0; i < 18; i += 1) {
      recipes.push({
        uri: i,
        image: 'image',
        source: 'source',
        label: 'label',
      });
    }
    wrapper = shallow(<RecipeTable recipes={recipes} />);
  });

  it('should display the first 9 recipes', () => {
    expect(wrapper.find(RecipeTile)).toHaveLength(9);
  });

  it('should not show the previous button on the first page', () => {
    expect(wrapper.containsMatchingElement(<button className="grow button previous"><FontAwesomeIcon /></button>)).toEqual(false);
  });

  it('should show the next button if there are more pages', () => {
    expect(wrapper.containsMatchingElement(<button className="grow button next"><FontAwesomeIcon /></button>)).toEqual(true);
  });

  it('should show the previous button if there are previous pages', () => {
    wrapper.setState({
      selectedSection: 1,
    });

    expect(wrapper.containsMatchingElement(<button className="grow button previous"><FontAwesomeIcon /></button>)).toEqual(true);
  });

  it('should not show the next button if it is on the last page', () => {
    wrapper.setState({
      selectedSection: 1,
    });

    expect(wrapper.containsMatchingElement(<button className="grow button next"><FontAwesomeIcon /></button>)).toEqual(false);
  });
});
