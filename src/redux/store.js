import { createStore } from 'redux';

const matrixData = JSON.parse(localStorage.getItem('matrix-data'));
const initialState = {
  id: matrixData ? matrixData.id : new Date().getTime(),
  data: matrixData ? matrixData.data : {}
};

const matrix = (state = initialState, action) => {
  switch (action.type) {
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
