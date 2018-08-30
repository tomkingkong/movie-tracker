export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'DISPLAY_HANKS_MOVIES':
      return action.movies;
    case 'DISPLAY_FAVORITES':
      return action.movies
    default:
      return state
  }
};