import { useState, memo } from 'react';
import classNames from 'classnames';

import './Table.scss';
import * as data from '../../assets/levels-data-list.json';

function Table() {
  return (
    <table className="table">
      <tbody className="table__body">
      {[...Array(10)].map((x, i) =>
        <ObjectRow key={i} />
      )}
      </tbody>
    </table>
  );
}

const ObjectRow = () => {

  return (
    <tr>
      {[...Array(10)].map((x, i) =>
        <ObjectCell key={i} />
      )}
    </tr>
  )
}

const ObjectCell = () => {
  const [filled, setFilled] = useState(false);
  const [empty, setEmpty] = useState(false);
  const cellClasses = classNames({
    'table__cell': true,
    'table__cell_theme_filled': filled,
    'table__cell_theme_empty': empty
  });

  const onClick = () => {
    if (filled || empty) return;
    if (Math.random() < 0.5) {
      setFilled(true);
      return;
    }
    setEmpty(true);
  }

  return (
    <td className={cellClasses} onClick={onClick}></td>
  )
}

export default Table;