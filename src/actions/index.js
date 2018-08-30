export const displayHanksMovies = (movies) => ({
  type: 'DISPLAY_HANKS_MOVIES',
  movies
})

export const updateFavorites = (movies) => ({
  type: 'UPDATE_FAVORITES',
  movies
})

export const loginUser = (user) => ({
  type: 'LOGIN_USER',
  user
})

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})
