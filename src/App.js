import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import configureStore from './redux/configureStore';
import TablePanel from './components/TablePanel';
import Table from './components/Table';
import './App.css';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={TablePanel} />
          <Route exact path="/table/:id" component={Table} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
