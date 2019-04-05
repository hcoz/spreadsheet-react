import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getTableList } from '../redux/reducers';

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
    this.props.addTable(this.state);
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
         {this.props.tableList.map(
           (table) => (
              <li key={table}>
                <Link key={table} to={`/table/${table}`}>{table}</Link>
              </li>
            )
         )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tableList: getTableList(state)
});

const mapDispatchToProps = (dispatch) => ({
  addTable(state) {
    dispatch({
      type: 'ADD_TABLE',
      id: new Date().getTime(),
      table: {
        width: state.width,
        height: state.height,
        data: {}
      }
    });
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablePanel);
