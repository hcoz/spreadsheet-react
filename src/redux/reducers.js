export const reducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'ADD_TABLE':
      return Object.assign({}, state, {
        [action.id]: action.table
      });
    case 'UPDATE_TABLE':
      const { tableId, key, value } = action;
      newState = Object.assign({}, state);
      if (newState[tableId]) {
        newState[tableId].data[key] = value;
      }
      return newState;
    case 'REMOVE_TABLE':
      newState = Object.assign({}, state);
      delete newState[action.tableId];
      return newState;
    default:
      return state;
  }
};

// selectors are defined below
export const getTableList = (state = {}) => {
  return Object.keys(state);
};

export const getTableData = (state = {}, tableId) => {
  return Object.assign({}, state[tableId], {
    width: parseInt(state[tableId].width),
    height: parseInt(state[tableId].height)
  });
};
