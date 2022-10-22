import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import useTypedSelector from '../../hooks/useTypedSelector';
import { setMode } from '../../store/slices/LevelSlice';

import bulb from '../../assets/img/bulb.png';
import './Modal.scss';

function ModalHint() {
  const { hints } = useTypedSelector((state) => state);
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(true);
  const modalClasses = classNames({
    modal: true,
    modal_hidden: hidden,
  });

  useEffect(() => {
    if (hints === 0) {
      setHidden(false);
      document.body.style.overflow = 'hidden';
    }
  }, [hints]);

  const onCancel = () => {
    setHidden(true);
    document.body.style.overflow = 'unset';
    dispatch(setMode('block'));
  };

  return (
    <div className={modalClasses}>
      <div className="modal__overflow" />
      <div className="modal__content">
        <div className="modal__title">Oops... you have no more hints!</div>
        <div className="modal__img-wrapper">
          <img src={bulb} alt="hint" className="modal__img-bulb" />
        </div>
        <button type="button" className="modal__button" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default ModalHint;
