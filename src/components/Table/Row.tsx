
import Cell from './Cell';

interface RowProps {
  size: number,
  rowCode: string
}

const Row = ({size, rowCode}: RowProps) => {
  const keys = rowCode.match(/1+/g)!.map(item => item.length).join(' ');

  return (
    <tr>
      <td className="table__row-keys">{keys}</td>
      {[...Array(size)].map((x, i) =>
        <Cell key={i} cellCode={parseInt(rowCode[i])} />
      )}
    </tr>
  )
}

export default Row;