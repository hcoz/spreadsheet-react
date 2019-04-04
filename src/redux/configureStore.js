import { createStore } from 'redux';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './localStorage';
import { reducer } from './reducer';

export default () => {
  const persistedState = loadState();
  const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};
