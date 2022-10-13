
import Row from './Row';

import './Table.scss';

interface ILevel {
  id: number,
  name: string,
  code: string
}

function Table({ level }: { level: ILevel}) {
  const levelCode = level?.code || '';
  const size = Math.sqrt(levelCode.length);

  const getEveryTenthValue = (string: string, start: number) => {
    const result = [];
    for (let i=start; i<string.length; i+=10) result.push(string[i]);
    return result.join('').match(/1+/g)!.map(item => item.length).join('\n');
  }

  return (
    <table className="table">
      <tbody className="table__body">
        <tr>
          <td></td>
          {
            [...Array(size)].map((x, i) => {
              return <td key={i} className="table__column-keys">{getEveryTenthValue(levelCode, i)}</td>
            })
          }
        </tr>
        {
          [...Array(size)].map((x, i) =>
            <Row size={size} rowCode={levelCode.slice(i * 10, i * 10 + 10)} key={i} />
          )
        }
      </tbody>
    </table>
  );
}

export default Table;