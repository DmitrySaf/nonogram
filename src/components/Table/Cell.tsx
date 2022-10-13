import { useState, memo } from 'react';
import { useDispatch } from 'react-redux'
import classNames from 'classnames';

import useTypedSelector from "../../hooks/useTypedSelector";
import { loseHealth } from "../../store/slices/LevelSlice";
import { updateAccomplishment } from "../../store/slices/LevelSlice";

const Cell = ({ cellCode, index }: {cellCode: number, index: number}) => {
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
        dispatch(updateAccomplishment(index));
        return;
      }
      dispatch(loseHealth());
      setCross(true);
      return;
    }
    if (cellCode) {
      dispatch(loseHealth());
      dispatch(updateAccomplishment(index));
      setBlock(true);
      return;
    }
    setCross(true);
  }

  return (
    <td className={cellClasses} onClick={onClick}></td>
  )
}

export default memo(Cell);