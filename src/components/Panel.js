import React, { Component } from 'react';
import Table from './Table';
import TableCreator from './TableCreator';

class Panel extends Component {
  render() {
    const tables = store.getState();
    return (
      <div>
        <TableCreator />
        {tables.map((t) => <Table id={t.id} x={t.width} y={t.height} />)}
      </div>
    )
  }
}

export default Panel;
