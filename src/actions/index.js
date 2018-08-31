export const displayHanksMovies = (movies) => ({
  type: 'DISPLAY_HANKS_MOVIES',
  movies
})

export const updateFavorites = (movies) => ({
  type: 'UPDATE_FAVORITES',
  movies
export const addFavorite = (movie) => ({
  type: 'ADD_FAVORITE',
  movie
});

export const removeFavorite = (movieId) => ({
  type: 'REMOVE_FAVORITE',
  movieId
});

export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
});
