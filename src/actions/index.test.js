import * as actions from './index.js';

describe('actions', () => {
  it('should return a type of DISPLAY_HANKS_MOVIES with movies', () => {
    const movies = [{}];
    const expectedAction = {
      type: 'DISPLAY_HANKS_MOVIES',
      movies
    };
    const result = actions.displayHanksMovies(movies);
    expect(result).toEqual(expectedAction);
  });

  it('should return a type of UPDATE_FAVORITES', () => {
    const movies = [{}];
    const expectedAction = {
      type: 'UPDATE_FAVORITES',
      movies
    };
    const result = actions.updateFavorites(movies);
    expect(result).toEqual(expectedAction);
  });

  it('should return a type of DISPLAY_FAVORITES with movies', () => {
    const movies = [{}];
    const expectedAction = {
      type: 'DISPLAY_FAVORITES',
      movies
    };
    const result = actions.displayFavorites(movies);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_FAVORITE', () => {
    const movie = {title: 'Big'};
    const expectedAction = {
      type: 'ADD_FAVORITE',
      movie
    };
    const result = actions.addFavorite(movie);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_FAVORITE', () => {
    const expectedAction = {
      type: 'REMOVE_FAVORITE',
      movieId: 5
    };
    const result = actions.removeFavorite(5);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOGIN_USER', () => {
    const user = { name: 'Sam', email: 'sam@gmail.com', password: 'sam123' };
    const expectedAction = {
      type: 'LOGIN_USER',
      user: { name: 'Sam', email: 'sam@gmail.com', password: 'sam123' }
    };
    const result = actions.loginUser(user);
    expect(result).toEqual(expectedAction);
  });

  it('should have a type of LOGOUT_USER', () => {
    const expectedAction = {
      type: 'LOGOUT_USER'
    };
    const result = actions.logoutUser();
    expect(result).toEqual(expectedAction);
  });

  it('should have type of ALERT_USER', () => {
    const message = 'Email already has been taken';
    const expectedAction = {
      type: 'ALERT_USER',
      message
    };
    const result = actions.alertUser(message);
    expect(result).toEqual(expectedAction);
  });
});