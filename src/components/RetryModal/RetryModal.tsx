import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import classNames from "classnames";

import useTypedSelector from "../../hooks/useTypedSelector";
import { restoreHealth } from "../../store/slices/LevelSlice";

import './RetryModal.scss';

function RetryModal() {
  const { health } = useTypedSelector(state => state);
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState(true);
  const modalClasses = classNames({
    'modal-retry': true,
    'modal-retry_hidden': hidden
  });

  useEffect(() => {
    if (health === 0) {
      setHidden(false);
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset";
    }
  }, [health])

  const onRetry = () => {
    setHidden(true);
    dispatch(restoreHealth())
  }

  return (
    <div className={modalClasses}>
      <div className="modal-retry__overflow"></div>
      <div className="modal-retry__content">
        <div className="modal-retry__text">Oops... you have no more hearts!</div>
        <div className="modal-retry__heart-wrapper">
          <div className="modal-retry__heart">favorite</div>
        </div>
        <div className="modal-retry__button" onClick={onRetry}>Retry</div>
      </div>
    </div>
  );
}

export default RetryModal;