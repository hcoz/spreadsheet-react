import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getTableData } from '../redux/reducers';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.input = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleData = this.handleData.bind(this);
    this.calculateValue = this.calculateValue.bind(this);
  }

  calculateValue(expression) {
    if (!expression) {
      return false;
    }
    // if starts with '=', calcaulate the math expression
    if (expression[0] === '=') {
      // eslint-disable-next-line
      return eval(expression.slice(1)).toString();
    }
    return expression.toString();
  }

  handleClick(e) {
    e.target.classList.add('selected');
    this.setState({
      editing: true
    });
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.handleData(e);
    }
  }

  handleData(e) {
    const value = this.calculateValue(this.input.current.value);
    if (value) {
      this.props.updateTable(this.props.match.params.id, this.props.id, value);
      // update local state
      this.setState({
        editing: false
      });
      e.target.classList.remove('selected');
    }
  }

  render() {
    // first row
    if (this.props.y === 0) {
      const alpha = ' abcdefghijklmnopqrstuvwxyz'.split('');
      return <span className="cell header">{alpha[this.props.x]}</span>;
    }
    // first column
    if (this.props.x === 0) {
      return <span className="cell header">{this.props.y}</span>;
    }

    const cell = this.state.editing ?
      <input
        className="cell"
        type="text"
        onBlur={this.handleData}
        onKeyDown={this.handleKeyDown}
        ref={this.input}
      />
      : <span
        className="cell"
        onClick={this.handleClick}
        >
        {this.props.table.data[this.props.id]}
      </span>;

    return cell;
  }
}

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  table: getTableData(state, ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
  updateTable(tableId, key, value) {
    dispatch({
      type: 'UPDATE_TABLE',
      tableId: tableId,
      key: key,
      value: value
    });
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cell)
);
