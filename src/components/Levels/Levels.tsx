import { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { returnToDefaults } from "../../store/slices/LevelSlice";

import './Levels.scss';

interface ILevel {
  id: string,
  order: number,
  name: string,
  code: string,
  colorsCode: string,
  colors: string[]
}

function Levels({ levels }: {levels: ILevel[]}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(returnToDefaults());
  }, []);

  return (
    <div className="levels">
      {
        levels.map(({id, order}) => (
          <Level key={id} order={order} id={id} />
        ))
      }
    </div>
  );
}

const Level = ({ order, id }: {id: string, order: number}) => {
  return (
    <Link to={`level/${id}`} className="levels__level">
      Level {order}
    </Link>
  )
}

export default Levels;