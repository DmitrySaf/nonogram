import { useState, memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { loseHealth, updateAccomplishment, wasteHint } from '../../store/slices/LevelSlice';

import useTypedSelector from '../../hooks/useTypedSelector';

interface CellProps {
  cellCode: number,
  index: number,
  cellColor: any,
  mode: string
}

function Cell({
  cellCode, index, cellColor, mode,
}: CellProps) {
  const { accomplishment } = useTypedSelector((state) => state);
  const [block, setBlock] = useState(false);
  const [cross, setCross] = useState(false);
  const dispatch = useDispatch();
  const isColor = cellColor ? { backgroundColor: cellColor, transition: `all .2s linear ${(index * 2) / 100}s` } : undefined;
  const cellClasses = classNames({
    table__cell: true,
    table__cell_theme_block: block,
    table__cell_theme_cross: !cellColor && cross,
  });

  useEffect(() => {
    if (accomplishment.match(/0/g)?.length === 100) {
      setBlock(false);
      setCross(false);
    }
  }, [accomplishment]);

  const onClick = () => {
    if (block || cross) return;
    if (mode === 'hint') {
      dispatch(wasteHint());
      if (cellCode) {
        dispatch(updateAccomplishment(index));
        setBlock(true);
        return;
      }
      setCross(true);
    }
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
  };

  return (
    /* eslint-disable-next-line jsx-a11y/click-events-have-key-events,
       jsx-a11y/no-noninteractive-element-interactions */
    <td width={40} className={cellClasses} style={isColor} onClick={onClick} />
  );
}

export default memo(Cell);
