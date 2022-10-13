import { useState } from 'react';
import classNames from 'classnames';

import useTypedSelector from '../../hooks/useTypedSelector';

interface RowProps {
  levelCode: string,
  index: number
}

function KeysRow({levelCode, index}: RowProps) {
  const { accomplishment } = useTypedSelector(state => state);
  const getEveryTenthValue = (string: string, start: number) => {
    const result = [];
    for (let i=start; i<string.length; i+=10) result.push(string[i]);
    return result;
  }
  const keyClassnames = classNames({
    'table__keys': true,
    'table__keys_theme_column': true,
    'table__keys_accomplished': getEveryTenthValue(levelCode, index).join('').match(/1/g)?.length === getEveryTenthValue(accomplishment, index).join('').match(/1/g)?.length
  });

  return (
    <td className={keyClassnames}>{getEveryTenthValue(levelCode, index).join('').match(/1+/g)!.map(item => item.length).join('\n')}</td>
  );
}

export default KeysRow;