import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Row from './Row';

class Table extends Component {
  render() {
    const {x, y} = this.props;
    const rows = [];

    for (let i = 0; i < y; i++) {
      rows.push(
        <Row key={i} x={x} y={i} />
      );
    }

    return <div className="table">{rows}</div>;
  }
}

Table.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Table;
