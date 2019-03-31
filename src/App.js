import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Panel from './components/Panel';
import store from './redux/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Provider store={store}>
          <Panel />
        </Provider>
      </div>
    );
  }
}

export default App;
