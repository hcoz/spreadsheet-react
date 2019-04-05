import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Row from './Row';
import { getTableData } from '../redux/reducers';

class Table extends Component {
  render() {
    const { width, height } = this.props.table;
    const rows = [];

    for (let i = 0; i < width; i++) {
      rows.push(
        <Row key={i} x={height} y={i} />
      );
    }

    return <div className="table">{rows}</div>;
  }
}

Table.propTypes = {
  table: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  })
};

const mapStateToProps = (state, ownProps) => ({
  table: getTableData(state, ownProps.match.params.id)
});

export default connect(mapStateToProps)(Table);
