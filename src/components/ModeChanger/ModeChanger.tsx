import { useState } from 'react';

import './ModeChanger.scss';

function ModeChanger() {
  const [mode, setMode] = useState('block');

  const onCrossClick = () => {
    setMode('cross');
  }

  const onBlockClick = () => {
    setMode('block');
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
