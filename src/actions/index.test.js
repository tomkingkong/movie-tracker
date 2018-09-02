import * as actions from './index.js';

describe('actions', () => {
  it('should return a type of DISPLAY_HANKS_MOVIES with movies', () => {
    const movies = [{}];
    const expectedAction = {
      type: 'DISPLAY_HANKS_MOVIES',
      movies
    }
    const result = actions.displayHanksMovies(movies);
    expect(result).toEqual(expectedAction);
  })

  it('should return a type of UPDATE_FAVORITES', () => {
    const movies = [{}];
    const expectedAction = {
      type: 'UPDATE_FAVORITES',
      movies
    }
    const result = actions.updateFavorites(movies);
    expect(result).toEqual(expectedAction);
  })

  it('should return a type of DISPLAY_FAVORITES with movies', () => {
    const movies = [{}];
    const expectedAction = {
      type: 'DISPLAY_FAVORITES',
      movies
    }
    const result = actions.displayFavorites(movies);
    expect(result).toEqual(expectedAction);
  })

  it('should have a type of ADD_FAVORITE', () => {
 
  })

  it('should have a type of REMOVE_FAVORITE', () => {

  })

  it('should have a type of LOGIN_USER', () => {

  })

  it('should have a type of LOGOUT_USER', () => {

  })

  it('should have type of ALERT_USER', () => {

  })
})