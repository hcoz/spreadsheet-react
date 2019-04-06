import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getTableList } from '../redux/reducers';
import { addTable, removeTable } from '../redux/actions';

class TablePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '',
      height: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveTable = this.handleRemoveTable.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewTable(this.state);
    this.setState({
      width: '',
      height: ''
    });
  }

  handleRemoveTable(e) {
    this.props.removeTable(e.target.dataset.tableId);
    // redirect to main page after deeletion
    this.props.history.push('/');
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
            (tableId) => (
              <li key={tableId}>
                <Link key={tableId} to={`/table/${tableId}`}>{tableId}</Link>
                <span className="remove-btn" onClick={this.handleRemoveTable} data-table-id={tableId}>X</span>
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

const mapDispatchToProps = {
  addNewTable: addTable,
  removeTable: removeTable
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TablePanel);
