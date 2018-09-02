import React from "react";
import { MemoryRouter } from "react-router";
import { shallow, mount, render } from "enzyme";

import { ContentRoute } from ".";

describe('ContentRoute container', () => {
  let wrapper;
  let displayHanksMovies;
  let movies;
  let favorites;

  beforeEach(() => {
    displayHanksMovies = jest.fn();
  })

  it('should match snapshot with the / path', () =>{
    wrapper = shallow(
      <ContentRoute 
        displayHanksMovies={displayHanksMovies} 
        movies={[]}
        favorites={[]}
      />);

    render(
      <MemoryRouter initialEntries={['/']}>
        <ContentRoute
          displayHanksMovies={displayHanksMovies}
          movies={[]}
          favorites={[]}
        />
      </MemoryRouter>
    ); 
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot with the /favorites path', () =>{
    wrapper = shallow(
      <ContentRoute 
        displayHanksMovies={displayHanksMovies} 
        movies={[]}
        favorites={[]}
      />);

    render(
      <MemoryRouter initialEntries={['/favorites']}>
        <ContentRoute
          displayHanksMovies={displayHanksMovies}
          movies={[]}
          favorites={[]}
        />
      </MemoryRouter>
    ); 
    expect(wrapper).toMatchSnapshot();
  });

  it('should call displayHanksMovies on componentDidMount', () =>{
    let mockHanksMovies = {cast:[]}
    let mockFn = jest.fn().mockImplementation(() => (mockHanksMovies))
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
    render(
      <MemoryRouter initialEntries={['/']}>
        <ContentRoute
          displayHanksMovies={mockFn}
          movies={[]}
          favorites={[]}
        />
      </MemoryRouter>
    ); 
    wrapper.instance().componentDidMount();
    expect(mockFn).toHaveBeenCalled();
  });
})