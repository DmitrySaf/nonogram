import { useState } from 'react';
import { useDispatch } from 'react-redux'
import classNames from 'classnames';

import useTypedSelector from "../../hooks/useTypedSelector";
import { loseHealth } from "../../store/slices/LevelSlice";

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
        <Cell key={i} cellCode={parseInt(rowCode[i])} />
      )}
    </tr>
  )
}

const Cell = ({ cellCode }: {cellCode: number}) => {
  const { mode } = useTypedSelector(state => state);
  const dispatch = useDispatch();
  const [block, setBlock] = useState(false);
  const [cross, setCross] = useState(false);
  const cellClasses = classNames({
    'table__cell': true,
    'table__cell_theme_block': block,
    'table__cell_theme_cross': cross
  });

  const onClick = () => {
    if (block || cross) return;
    if (mode === 'block') {
      if (cellCode) {
        setBlock(true);
        return;
      }
      dispatch(loseHealth());
      setCross(true);
      return;
    }
    if (cellCode) {
      dispatch(loseHealth());
      setBlock(true);
      return;
    }
    setCross(true);
    return;
  }

  return (
    <td className={cellClasses} onClick={onClick}></td>
  )
}

export default Table;