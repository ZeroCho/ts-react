import * as React from 'react';
import Tr from './Tr';
import { TableContext } from './MineSearch';

const { useContext, memo } = React;

const Table = () => {
  const { tableData } = useContext(TableContext);
  return (
    <table>
      {Array(tableData.length).fill(null).map((tr, i) => <Tr rowIndex={i} />)}
    </table>
  )
};

export default memo(Table);
