export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TABLE':
      return Object.assign({}, state, {
        [action.id]: action.table
      });
    case 'UPDATE_TABLE':
      const { tableId, key, value } = action;
      let newState = Object.assign({}, state);
      if (newState[tableId]) {
        newState[tableId].data[key] = value;
      }
      return newState;
    default:
      return state;
  }
};

export const getTableList = (state = {}) => {
  return Object.keys(state);
};

export const getTableData = (state = {}, tableId) => {
  return Object.assign({}, state[tableId], {
    width: parseInt(state[tableId].width),
    height: parseInt(state[tableId].height)
  });
};
