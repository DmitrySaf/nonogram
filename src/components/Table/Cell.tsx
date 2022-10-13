import { useState, memo } from 'react';
import { useDispatch } from 'react-redux'
import classNames from 'classnames';

import useTypedSelector from "../../hooks/useTypedSelector";
import { loseHealth } from "../../store/slices/LevelSlice";
import { updateAccomplishment } from "../../store/slices/LevelSlice";

const Cell = ({ cellCode, index, cellColor }: {cellCode: number, index: number, cellColor: any}) => {
  const { mode } = useTypedSelector(state => state);
  const dispatch = useDispatch();
  const [block, setBlock] = useState(false);
  const [cross, setCross] = useState(false);
  const isColor = cellColor ? {backgroundColor: cellColor, transition: `all .2s linear ${index*2/100}s`} : undefined;
  const cellClasses = classNames({
    'table__cell': true,
    'table__cell_theme_block': block,
    'table__cell_theme_cross': !cellColor && cross
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
    <td className={cellClasses} style={isColor} onClick={onClick}></td>
  )
}

export default memo(Cell);