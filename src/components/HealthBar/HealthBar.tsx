import { memo } from "react";

import useTypedSelector from "../../hooks/useTypedSelector";

import './HealthBar.scss';

function HealthBar() {
  const { health } = useTypedSelector(state => state);

  const createHeart = () => {
    return (
      [...Array(3)].map((item, i) => {
        if (i < health) return <div key={i} className="health-bar__heart">favorite</div>;
        return <div key={i} className="health-bar__heart">favorite_border</div>;
      })
    )
  }

  return (
    <div className="health-bar">
      {createHeart()}
    </div>
  );
}

export default memo(HealthBar);