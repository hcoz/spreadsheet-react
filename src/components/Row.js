import React, { Component } from 'react';
import Cell from './Cell';

class Row extends Component {
  render() {
    const cells = [];

    for (let i = 0; i < this.props.x; i++) {
      cells.push(
        <Cell key={`${i}-${this.props.y}`} x={i} y={this.props.y} />
      );
    }

    return <div>{cells}</div>;
  }
}

export default Row;
