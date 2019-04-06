export const addTable = (state) => ({
  type: 'ADD_TABLE',
  id: new Date().getTime(),
  table: {
    width: state.width,
    height: state.height,
    data: {}
  }
});

export const updateTable = (tableId, key, value) => ({
  type: 'UPDATE_TABLE',
  tableId: tableId,
  key: key,
  value: value
});

export const removeTable = (tableId) => ({
  type: 'REMOVE_TABLE',
  tableId: tableId
});
