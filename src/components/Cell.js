import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      value: props.value
    };
    this.handleClick = this.handleClick.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentDidMount() {

  }

  handleClick(e) {
    e.target.classList.add('selected');
    this.setState({
      editing: true
    });
  }

  onBlur(e) {
    const value = this.calculateValue(e.target.value);

    this.setState({
      value: value,
      editing: false
    });
    e.target.classList.remove('selected');
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
        onBlur={this.onBlur}
      />
      : <span
        className="cell"
        onClick={this.handleClick}
        >
        {this.state.value}
      </span>;

    return cell;
  }
}

export default Cell;
