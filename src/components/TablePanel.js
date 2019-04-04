import React, { Component } from 'react';
import { connect } from 'react-redux';

class TablePanel extends Component {
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
    this.props.dispatch({
      type: 'ADD_TABLE',
      table: {
        id: new Date().getTime(),
        width: this.state.width,
        height: this.state.height,
        data: {}
      }
    });
    this.setState({
      width: '',
      height: ''
    });
  }

  render() {
    return (
      <div>
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
      
        <ul id="table-list">
          <li>table1</li>
        </ul>
      </div>
    )
  }
}

// const mapDispatchToProps = (dispatch, props) => {

// }

export default connect()(TablePanel);
