import { favoritesReducer } from './favoritesReducer';
import { moviesReducer } from './moviesReducer';
import { alertReducer } from './alertReducer';
import { userReducer } from './userReducer';
import { rootReducer } from '.';
import * as actions from '../actions';

describe('favoritesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = favoritesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return the state with a new favorite', () => {
    const initialState = [];
    const movie = {title: 'Big'};
    const expected = [movie];
    const result = favoritesReducer(initialState, actions.addFavorite(movie));
    expect(result).toEqual(expected);
  });

  it('should return the state with a removed favorite', () => {
    const currentState = [{movie_id: 5, title: 'Big'}];
    const movie_id = 5;
    const expected = [];
    const result = favoritesReducer(currentState, actions.removeFavorite(movie_id));
    expect(result).toEqual(expected);
  });

  it('should update favorites when a user clicks the favorites button', () => {
    const initialState = [];
    const movies = [{title: 'Big'}, {title: 'The Green Mile'}];
    const expected = movies;
    const result = favoritesReducer(initialState, actions.updateFavorites(movies));
    expect(result).toEqual(expected);
  });
});

describe('moviesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = moviesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should update state with Hanks movies', () => {
    const initialState = [];
    const movies = [{title: 'Big'}, {title: 'Big'}];
    const expected = [...movies];
    const result = moviesReducer(initialState, actions.displayHanksMovies(movies));
    expect(result).toEqual(expected);
  });
});

describe('alertReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = alertReducer(undefined, {});
    expect(result).toEqual(expected);
  });

})