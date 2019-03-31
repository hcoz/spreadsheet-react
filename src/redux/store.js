import { createStore } from 'redux';

const matrixData = JSON.parse(localStorage.getItem('matrix-data'));
const initialState = matrixData ? matrixData : [];

const matrix = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_TABLE':
      let newState = Object.assign([], state);
      newState.push({
        id: new Date().getTime(),
        widh: action.width,
        height: action.height,
        data: {}
      });
      return newState;
    case 'UPDATE_TABLE':
      let newData = state.data;
      const { key, value } = action;
      newData[key] = value;
      return Object.assign({}, state, { data: newData });
    default:
      return state;
  }
}

export default createStore(
  matrix,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
