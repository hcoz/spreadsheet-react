import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Table from './components/Table';
import store from './redux/store';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Provider store={store}>
          <Table x={4} y={4} />
        </Provider>
      </div>
    );
  }
}

export default App;
