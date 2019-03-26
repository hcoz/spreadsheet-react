import React, { Component } from 'react';
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

    return <div>{rows}</div>;
  }
}

export default Table;
