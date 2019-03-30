import { createStore } from 'redux';

const initialState = {
  id: new Date().getTime(),
  data: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
};

const matrix = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_TABLE':
      return Object.assign({}, state, { data: action.data });
    case 'UPDATE_TABLE':
      let newData = state.data;
      newData[action.x][action.y] = action.value;
      return Object.assign({}, state, { data: newData });
    default:
      return state;
  }
}

export default createStore(
  matrix,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
