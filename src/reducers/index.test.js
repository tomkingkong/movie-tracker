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

  it('should default to an empty array if favorites is updated with false', () => {
    const initialState = [{}];
    const expected = [];
    const result = favoritesReducer(initialState, actions.updateFavorites(false));
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

  it('should default to an empty array if updated with false', () => {
    const initialState = [{title: 'Big'}, {title: 'Big'}];
    const expected = [];
    const result = moviesReducer(initialState, actions.displayHanksMovies(false));
    expect(result).toEqual(expected);
  });
});

describe('alertReducer', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = alertReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return an alert message', () => {
    const initialState = '';
    const expected = 'Alert!';
    const result = alertReducer(initialState, actions.alertUser('Alert!'));
    expect(result).toEqual(expected);
  });
});

describe('userReducer', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = userReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it('should return with a new user', () => {
    const initialState = {};
    const newUser = { name: 'Tim', email: 's', password: 's', id: 1 }
    const result = userReducer(initialState, actions.loginUser(newUser));
    expect(result).toEqual(newUser);
  });

  it('should remove a the user', () => {
    const expected = {};
    const initialState = { name: 'Tim', email: 's', password: 's', id: 1 }
    const result = userReducer(initialState, actions.logoutUser());
    expect(result).toEqual(expected);
  });
});