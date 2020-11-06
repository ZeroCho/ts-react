import { Dispatch, FunctionComponent, memo, useMemo } from 'react';
import * as React from 'react';
import Td from './Td';

interface Props {
  rowData: string[];
  rowIndex: number;
  dispatch: Dispatch<any>;
}

const Tr: FunctionComponent<Props> = ({ rowData, rowIndex, dispatch }) => {
  console.log('tr rendered');

  return (
    <tr>
      {Array(rowData.length).fill(null).map((td, i) => (
        useMemo(
          () => <Td key={i} dispatch={dispatch} rowIndex={rowIndex} cellIndex={i} cellData={rowData[i]}>{''}</Td>,
          [rowData[i]],
        )
      ))}
    </tr>
  );
};

export default memo(Tr);
