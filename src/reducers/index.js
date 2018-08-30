import { combineReducers } from 'redux';

import { favoritesReducer } from './favoritesReducer';
import { moviesReducer } from './moviesReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  favorites: favoritesReducer,
  user: userReducer
})
