export const alertReducer = (state = '', action) => {
  switch (action.type) {
    case 'ALERT_USER':
      return action.message;
    default:
      return state;
  }
};