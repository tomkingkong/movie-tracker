import React from 'react';
import { shallow } from 'enzyme';

import MoviesContainer from '.';

describe('MoviesContainer component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MoviesContainer />);
    expect(wrapper).toMatchSnapshot();
  });

