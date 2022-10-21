import classNames from 'classnames';

interface ColumnKeysProps {
  levelCode: string,
  accomplishment: string
}

function ColumnKeys({ levelCode, accomplishment }: ColumnKeysProps) {
  const keyClassnames = classNames({
    'table__keys': true,
    'table__keys_theme_column': true,
    'table__keys_accomplished': levelCode.match(/1/g)?.length === accomplishment.match(/1/g)?.length,
  });

  return (
    <div className={keyClassnames}>{levelCode.match(/1+/g)!.map((item) => item.length).join('\n')}</div>
  );
}

export default ColumnKeys;
