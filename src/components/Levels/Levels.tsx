import { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { returnToDefaults } from "../../store/slices/LevelSlice";

import './Levels.scss';

interface ILevel {
  id: number,
  name: string,
  code: string,
  colorsCode: string,
  colors: string[]
}

function Levels({ levels }: {levels: ILevel[]}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(returnToDefaults());
  }, [])

  return (
    <div className="levels">
      {
        levels.map((item, i) => (
          <Level key={item.id} index={i + 1} />
        ))
      }
    </div>
  );
}

const Level = ({ index }: {index: number}) => {
  return (
    <Link to={`level/${index}`} className="levels__level">
      Level {index}
    </Link>
  )
}

export default Levels;