import React from 'react';
import { shallow } from 'enzyme';

import { MoviesContainer } from '.';

describe('MoviesContainer component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<MoviesContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with props', () => {
    const movies = [{}];
    const history = {}
    const wrapper = shallow(<MoviesContainer movies={movies} history={history} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should display loading gif if no movies to display', () => {
    const movies = [];
    const history = {};
    const wrapper = shallow(<MoviesContainer movies={movies} history={history} />);
    expect(wrapper).toMatchSnapshot();
  });
});

