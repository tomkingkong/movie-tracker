export const favoritesReducer = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_FAVORITES':
      return action.movies;
    case 'ADD_FAVORITE':
      return [...state, action.movie];
    default:
      return state;
  }
}