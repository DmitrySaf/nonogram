import { useDispatch } from 'react-redux';
import classNames from "classnames";

import useTypedSelector from '../../hooks/useTypedSelector';
import { setMode } from '../../store/slices/LevelSlice';

import bulb from '../../assets/img/bulb.png';
import './ModeChanger.scss';

function ModeChanger() {
  const { mode } = useTypedSelector((state) => state);
  const dispatch = useDispatch();
  const hintClassnames = classNames({
    'mode-changer__button': true,
    'mode-changer__button-hint': true,
    'mode-changer__button-hint_equipped': mode === 'hint'
  });
  const modeWrapperClassnames = classNames({
    'mode-changer__mode-wrapper': true,
    'mode-changer__mode-wrapper_equipped': mode !== 'hint',
    'mode-changer__mode-wrapper_mode_cross': mode === 'cross',
    'mode-changer__mode-wrapper_mode_block': mode === 'block'
  });

  const onModeToggle = () => {
    const newMode = (mode === 'block') ? 'cross' : 'block';

    dispatch(setMode(newMode));
  };

  const onHintClick = () => {
    dispatch(setMode('hint'));
  }

  return (
    <div className="mode-changer">
      <div className={modeWrapperClassnames} onClick={onModeToggle}>
        <button className="mode-changer__button mode-changer__button-cross" />
        <button className="mode-changer__button mode-changer__button-block" />
      </div>
      <button className={hintClassnames} data-hints={3} onClick={onHintClick}>
        <img src={bulb} alt="hint" className="mode-changer__hint-icon" />
      </button>
    </div>
  );
}

export default ModeChanger;
