import { memo } from 'react';

import useTypedSelector from '../../hooks/useTypedSelector';

import Cell from './Cell';
import { RowProps } from './IComponentsProps';

function Row({
  size, rowCode, index, colorsCode, colors,
}: RowProps) {
  const { mode } = useTypedSelector((state) => state);

  return (
    <tr>
      {
        [...Array(size)].map((x, i) => (
          <Cell
            mode={mode}
            key={i}
            index={index * size + i}
            cellCode={Number(rowCode[i])}
            cellColor={colorsCode && colors && colors[Number(colorsCode[index * size + i])]}
          />
        ))
      }
    </tr>
  );
}

export default memo(Row);
