export const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_FAVORITES':
      return action.movies;
    case 'ADD_FAVORITE':
      return [...state, action.movie];
    case 'REMOVE_FAVORITE':
      const newFavorites = state.filter(movie => movie.movie_id !== action.movieId);

      return newFavorites;
    default:
      return state;
  }
}