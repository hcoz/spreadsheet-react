import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

class Row extends Component {
  render() {
    const cells = [];

    for (let i = 0; i <= this.props.x; i++) {
      let id = `${i}-${this.props.y}`;
      cells.push(
        <Cell key={id} id={id} x={i} y={this.props.y} />
      );
    }

    return <div>{cells}</div>;
  }
}

Row.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

export default Row;
