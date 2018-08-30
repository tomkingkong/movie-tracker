export const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_FAVORITES':
      return action.movies;
    default:
      return state;
  }
}