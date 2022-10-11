import { useDispatch } from 'react-redux'

import useTypedSelector from "../../hooks/useTypedSelector";
import { setMode } from "../../store/slices/LevelSlice";

import './ModeChanger.scss';

function ModeChanger() {
  const { mode } = useTypedSelector(state => state);
  const dispatch = useDispatch();

  const onCrossClick = () => {
    dispatch(setMode('cross'));
  }

  const onBlockClick = () => {
    dispatch(setMode('block'));
  }

  return (
    <div className="mode-changer">
      <input className="mode-changer__input" type="checkbox" checked={mode === 'block'} readOnly/>
      <div className="mode-changer__mode-grid">
        <div className="mode-changer_mode_cross" onClick={onCrossClick}></div>
        <div className="mode-changer_mode_block" onClick={onBlockClick}></div>
      </div>
    </div>
  );
}

export default ModeChanger;
