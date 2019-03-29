import { createStore } from 'redux';

const initialState = {
  id: null,
  data: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
};

const matrix = (state = initialState, action) => {
  let newState = {
    id: state.id || new Date().getTime(),
    data: state.data
  };
  const i = action.x - 1;
  const j = action.y - 1;
  
  switch (action.type) {
    case 'INIT_TABLE':
      newState.data = action.data;
      return newState;
    case 'ADD_VALUE':
      newState.data[i][j] = action.value;
      return newState;
    case 'DELETE_VALUE':
      newState.data[i][j] = null;
      return newState;
    default:
      return state;
  }
}

export default createStore(
  matrix,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
