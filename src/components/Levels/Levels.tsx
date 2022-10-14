import React from 'react';

import { Link } from "react-router-dom";

import './Levels.scss';

interface ILevel {
  id: number,
  name: string,
  code: string,
  colorsCode: string,
  colors: string[]
}

function Levels({ levels }: {levels: ILevel[]}) {
  return (
    <main className="levels">
      {
        levels.map((item, i) => (
          <Level key={item.id} index={i + 1} />
        ))
      }
    </main>
  );
}

const Level = ({ index }: {index: number}) => {
  return (
    <Link to={`/level/${index}`} className="levels__level">
      Level {index}
    </Link>
  )
}

export default Levels;