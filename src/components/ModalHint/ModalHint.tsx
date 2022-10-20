import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import classNames from "classnames";

import useTypedSelector from "../../hooks/useTypedSelector";
import { setMode } from "../../store/slices/LevelSlice";

import bulb from '../../assets/img/bulb.png';
import './ModalHint.scss';

function ModalHint() {
  const { hints } = useTypedSelector(state => state);
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(true);
  const modalClasses = classNames({
    'modal-retry': true,
    'modal-retry_hidden': hidden
  });

  useEffect(() => {
    if (hints === 0) {
      setHidden(false);
      document.body.style.overflow = "hidden"
    }
  }, [hints])

  const onCancel = () => {
    setHidden(true);
    document.body.style.overflow = "unset";
    dispatch(setMode('block'));
  }

  return (
    <div className={modalClasses}>
      <div className="modal-retry__overflow"></div>
      <div className="modal-retry__content">
        <div className="modal-retry__title">Oops... you have no more hints!</div>
        <div className="modal-retry__img-wrapper">
          <img src={bulb} alt="hint" className="modal-retry__img-bulb" />
        </div>
        <button type="button" className="modal-retry__button" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default ModalHint;