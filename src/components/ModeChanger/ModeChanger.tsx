import { useDispatch } from 'react-redux';

import useTypedSelector from '../../hooks/useTypedSelector';
import { setMode } from '../../store/slices/LevelSlice';

import './ModeChanger.scss';

function ModeChanger() {
  const { mode } = useTypedSelector((state) => state);
  const dispatch = useDispatch();

  const onModeToggle = () => {
    const newMode = (mode === 'block') ? 'cross' : 'block';

    dispatch(setMode(newMode));
  };

  return (
    <div className="mode-changer">
      <input className="mode-changer__input" type="checkbox" checked={mode === 'block'} readOnly />
      <button className="mode-changer__mode-grid" type="button" onClick={onModeToggle}>
        <div className="mode-changer_mode_cross" />
        <div className="mode-changer_mode_block" />
      </button>
    </div>
  );
}

export default ModeChanger;
