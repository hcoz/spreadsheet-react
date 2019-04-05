export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TABLE':
      return Object.assign({}, state, {
        [action.id]: action.table
      });
    case 'UPDATE_TABLE':
      let newData = state.data;
      const { key, value } = action;
      newData[key] = value;
      return Object.assign({}, state, { data: newData });
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
