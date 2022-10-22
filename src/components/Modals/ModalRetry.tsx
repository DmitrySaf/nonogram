import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import useTypedSelector from '../../hooks/useTypedSelector';
import { returnToDefaults, initAccomplishment } from '../../store/slices/LevelSlice';

import './Modal.scss';

function ModalRetry({ size }: { size: number }) {
  const { health } = useTypedSelector((state) => state);
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(true);
  const modalClasses = classNames({
    modal: true,
    modal_hidden: hidden,
  });

  useEffect(() => {
    if (health === 0) {
      setHidden(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [health]);

  const onRetry = () => {
    setHidden(true);
    dispatch(returnToDefaults());
    dispatch(initAccomplishment(size));
  };

  return (
    <div className={modalClasses}>
      <div className="modal__overflow" />
      <div className="modal__content">
        <div className="modal__title">Oops... you have no more hearts!</div>
        <div className="modal__img-wrapper">
          <div className="modal__img">favorite</div>
        </div>
        <button type="button" className="modal__button" onClick={onRetry}>Retry</button>
      </div>
    </div>
  );
}

export default ModalRetry;
