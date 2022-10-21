import classNames from "classnames";

interface ColumnKeysProps {
  levelCode: string,
  accomplishment: string
}

function RowKeys({ levelCode, accomplishment }: ColumnKeysProps) {
  console.log(levelCode, accomplishment);
  const keyClassnames = classNames({
    'table__keys': true,
    'table__keys_theme_row': true,
    'table__keys_accomplished': levelCode.match(/1/g)?.length === accomplishment.match(/1/g)?.length,
  });
  const keys = levelCode.match(/1+/g)!.map((item) => item.length).join(' ');

  return (
    <div className={keyClassnames}>{keys}</div>
  );
}

export default RowKeys;
