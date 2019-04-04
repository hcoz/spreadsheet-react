export const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TABLE':
      let newState = Object.assign([], state);
      newState.push(action.table);
      return newState;
    case 'UPDATE_TABLE':
      let newData = state.data;
      const { key, value } = action;
      newData[key] = value;
      return Object.assign({}, state, { data: newData });
    default:
      return state;
  }
};
