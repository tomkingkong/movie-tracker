import React from 'react';
import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';

import { Card } from '.';

describe('Card component', () => {
  let mockHistory;
  let testState;
  let mockMovie;
  let mockUser;
  let wrapper;
  let store;
  let mockRemoveFavorite;
  let mockAddFavorite;
  let mockFn;
  let e;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({ json:() => Promise.resolve({})})
    })
    mockRemoveFavorite = jest.fn();
    mockAddFavorite = jest.fn();
    mockFn = jest.fn()
    e = {stopPropagation:jest.fn()}
    mockMovie = {
      title: 'title', 
      poster_path: 'words.jpg', 
      vote_average: 'avg', 
      overview: 'overview', 
      release_date: 'release',
      movie_id: 35
    }
    mockUser = { id: 1, name:'tim' }
    mockHistory = { push: jest.fn().mockImplementation(() => {}) }
    testState = { movies: [mockMovie], favorites: [], user: {mockUser} };
    store = createMockStore(testState);
  })

  it('should match snapshot with props passed', () => {
    wrapper = shallow(
      <Card 
        movie={mockMovie}
        history={mockHistory} 
        key={mockMovie.title+1}  
      />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have default state of toggleinfo and favorite set to false', () => {
    wrapper = shallow(
      <Card 
        movie={mockMovie}
        history={mockHistory} 
        key={mockMovie.title+1}  
      />);
    expect(wrapper.state().toggleInfo).toEqual(false);
    expect(wrapper.state().favorite).toEqual(false);
  });

  it('should toggle favorite to true on mount if matching a favorite movie', async () => {
    wrapper = shallow(
      <Card 
        movie={mockMovie}
        favorites={[mockMovie]}
        history={mockHistory} 
        key={mockMovie.title+1}  
      />);
    wrapper.instance().componentDidMount();
    expect(wrapper.state().favorite).toEqual(true);
  });

  it('should switch toggleinfo to true on click', () => {
    wrapper = shallow(
      <Card 
        movie={mockMovie}
        history={mockHistory} 
        key={mockMovie.title+1}  
      />);
    wrapper.find('article').simulate('click');
    expect(wrapper.state().toggleInfo).toEqual(true);
  });
