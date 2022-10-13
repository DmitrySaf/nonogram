import { memo } from 'react';
import classNames from 'classnames';

interface RowProps {
  levelCode: string,
  accomplishment: string
}

function KeysRow({levelCode, accomplishment}: RowProps) {
  const keyClassnames = classNames({
    'table__keys': true,
    'table__keys_theme_column': true,
    'table__keys_accomplished': levelCode.match(/1/g)?.length === accomplishment.match(/1/g)?.length
  });

  return (
    <td className={keyClassnames}>{levelCode.match(/1+/g)!.map(item => item.length).join('\n')}</td>
  );
}

export default memo(KeysRow);