import { useEffect, useRef, useState } from 'react';
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

  const getEveryTenthValue = (string: string, start: number) => {
    const result = [];
    for (let i=start; i<string.length; i+=10) result.push(string[i]);
    return result.join('').match(/1+/g)!.map(item => item.length).join('\n');
  }

  const renderRow = (rowCode: string, num: number) => {
    const keys = rowCode.match(/1+/g)!.map(item => item.length).join(' ');

    return (
      <tr key={num}>
        <td className="table__row-keys">{keys}</td>
        {[...Array(size)].map((x, i) =>
          <Cell key={i} cellCode={parseInt(rowCode[i])} />
        )}
      </tr>
    )
  }

  return (
    <table className="table">
      <tbody className="table__body">
        <tr>
          <td></td>
          {[...Array(size)].map((x, i) => {
            return <td key={i} className="table__column-keys">{getEveryTenthValue(levelCode, i)}</td>
          })
          }
        </tr>
        {[...Array(size)].map((x, i) =>
          renderRow(levelCode.slice(i * 10, i * 10 + 10), i)
        )
        }
      </tbody>
    </table>
  );
}

const Row = () => {
  
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