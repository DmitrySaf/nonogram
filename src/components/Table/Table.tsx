import { useEffect, useState } from 'react';
import classNames from 'classnames';

import './Table.scss';

interface ILevel {
  id: number,
  name: string,
  code: string
}

function Table({ level }: { level: ILevel}) {
  const levelCode = level?.code || '';
  const size = Math.sqrt(levelCode.length);

  return (
    <table className="table">
      <tbody className="table__body">
      {[...Array(size)].map((x, i) =>
        <Row key={i} columns={size} rowCode={levelCode.split('').splice(i * 10, size)} />
      )}
      </tbody>
    </table>
  );
}

const Row = ({ columns, rowCode }: {columns: number, rowCode: string[]}) => {
  return (
    <tr>
      {[...Array(columns)].map((x, i) =>
        <Cell key={i} state={parseInt(rowCode[i])} />
      )}
    </tr>
  )
}

const Cell = ({ state }: {state: number}) => {
  const [block, setBlock] = useState(false);
  const [cross, setCross] = useState(false);
  const cellClasses = classNames({
    'table__cell': true,
    'table__cell_theme_block': block,
    'table__cell_theme_cross': cross
  });

  const onClick = () => {
    if (block || cross) return;
    if (state) {
      setBlock(true);
      return;
    }
    setCross(true);
  }

  return (
    <td className={cellClasses} onClick={onClick}></td>
  )
}

export default Table;