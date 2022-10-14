import { useState, memo, useEffect } from "react";
import classNames from "classnames";

import useTypedSelector from "../../hooks/useTypedSelector";

import Cell from './Cell';

interface RowProps {
  size: number,
  rowCode: string,
  index: number,
  accomplishment: string,
  colorsCode: string | false,
  colors: string[] | false
}

const Row = ({size, rowCode, index, accomplishment, colorsCode, colors}: RowProps) => {
  const { mode } = useTypedSelector(state => state);
  const keys = rowCode.match(/1+/g)!.map(item => item.length).join(' ');
  const activeCellsAmount = rowCode.match(/1/g)?.length;
  const keyClassnames = classNames({
    'table__keys': true,
    'table__keys_theme_row': true,
    'table__keys_accomplished': accomplishment.match(/1/g)?.length === activeCellsAmount
  });

  return (
    <tr>
      <td className={keyClassnames}>{keys}</td>
      {[...Array(size)].map((x, i) =>
        <Cell
          mode={mode}
          key={i}
          index={index * size + i}
          cellCode={parseInt(rowCode[i])}
          cellColor={colorsCode && colors && colors[parseInt(colorsCode[index * size + i])]}
        />
      )}
    </tr>
  )
}

export default memo(Row);