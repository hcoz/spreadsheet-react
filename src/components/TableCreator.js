import React, { Component } from 'react';
import store from '../redux/store';

class TableCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '',
      height: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    store.dispatch({
      type: 'INIT_TABLE',
      width: this.state.width,
      height: this.state.height
    });
  }

  render() {
    return (
      <form className="table-creator" onSubmit={this.handleSubmit}>
        <input
          type="number"
          placeholder="Enter width of table"
          value={this.state.width}
          onChange={(e) => this.setState({ width: e.target.value })}
        />
        <input
          type="number"
          placeholder="Enter height of table"
          value={this.state.height}
          onChange={(e) => this.setState({ height: e.target.value })}
        />
        <button className="btn" type="submit">Create table</button>
      </form>
    )
  }
}

export default TableCreator;
