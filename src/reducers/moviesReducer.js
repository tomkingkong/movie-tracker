export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HANKS':
      return [...action.movies];
    default:
      return state;
  }
}