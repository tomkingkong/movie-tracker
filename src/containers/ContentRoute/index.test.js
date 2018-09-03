import React from "react";
import { MemoryRouter } from "react-router";
import { shallow, render } from "enzyme";

import { displayHanksMovies } from '../../actions';
import { ContentRoute, mapStateToProps, mapDispatchToProps } from ".";

describe('ContentRoute container', () => {
  let wrapper;
  let mockFn;
  let movies;
  let favorites;

  beforeEach(() => {
    mockFn = jest.fn();
    movies = [];
    favorites = [];
  });

  it('should match snapshot with the / path', () =>{
    wrapper = shallow(
      <ContentRoute 
        displayHanksMovies={mockFn} 
        movies={movies}
        favorites={favorites}
      />);

    render(
      <MemoryRouter initialEntries={['/']}>
        <ContentRoute 
          displayHanksMovies={mockFn} 
          movies={movies}
          favorites={favorites}
        />
      </MemoryRouter>
    ); 
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with the /favorites path', () =>{
    wrapper = shallow(
      <ContentRoute 
        displayHanksMovies={mockFn} 
        movies={movies}
        favorites={favorites}
      />);

    render(
      <MemoryRouter initialEntries={['/favorites']}>
        <ContentRoute
          displayHanksMovies={mockFn} 
          movies={movies}
          favorites={favorites}
        />
      </MemoryRouter>
    ); 
    expect(wrapper).toMatchSnapshot();
  });

  it('should call displayHanksMovies on componentDidMount', async () =>{
    let mockHanksMovies = {cast:[]};
    let mockFn = jest.fn().mockImplementation(() => (mockHanksMovies));
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockHanksMovies)
      });
    });
    wrapper = shallow(
      <ContentRoute 
        displayHanksMovies={mockFn} 
        movies={[]}
        favorites={[]}
      />);
    await wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {
    it('should have access to movies and user\'s favorites arrays', () => {
      const mockStore = {
        favorites: [],
        movies: []
      };
      const expected = {...mockStore};
      const result = mapStateToProps(mockStore);
      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('should display Tom Hanks movies', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = displayHanksMovies([]);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.displayHanksMovies([]);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});