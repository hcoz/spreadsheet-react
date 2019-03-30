import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import store from '../redux/store';

class Table extends Component {
  componentDidMount() {
    const matrix = JSON.parse(localStorage.getItem('matrix-data'));
    if (matrix) {
      store.dispatch({
        type: 'INIT_TABLE',
        data: matrix
      });
    }
  }

  componentWillUnmount() {
    const matrix = JSON.stringify(store.getState().data);
    localStorage.setItem('matrix-data', matrix);
  }

  render() {
    const {x, y} = this.props;
    const rows = [];

    for (let i = 0; i < y; i++) {
      rows.push(
        <Row key={i} x={x} y={i} />
      );
    }

    return <div>{rows}</div>;
  }
}

Table.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Table;
