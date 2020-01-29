import { Dispatch, FunctionComponent } from 'react';
import * as React from 'react';
import Td from './Td';

const { useRef, useEffect, memo, useMemo } = React;

interface Props {
  rowData: string[];
  rowIndex: number;
  dispatch: Dispatch<any>;
}

const Tr: FunctionComponent<Props> = ({ rowData, rowIndex, dispatch }) => {
  console.log('tr rendered');

  const ref = useRef<[string[]?, Dispatch<any>?, number?]>([]);
  useEffect(() => {
    console.log(rowData === ref.current[0], dispatch === ref.current[1], rowIndex === ref.current[2]);
    ref.current = [rowData, dispatch, rowIndex];
  }, [rowData, dispatch, rowIndex]);

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
