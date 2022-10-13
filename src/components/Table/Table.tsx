import Row from './Row';
import KeysRow from "./KeysRow";

import './Table.scss';

interface ILevel {
  id: number,
  name: string,
  code: string
}

function Table({ level }: { level: ILevel}) {
  const levelCode = level?.code || '';
  const size = Math.sqrt(levelCode.length);

  return (
    <table className="table">
      <tbody className="table__body">
        <tr>
          <td></td>
          {
            [...Array(size)].map((x, i) => 
              <KeysRow levelCode={levelCode} key={i} index={i} />
            )
          }
        </tr>
        {
          [...Array(size)].map((x, i) =>
            <Row size={size} rowCode={levelCode.slice(i * 10, i * 10 + 10)} index={i} key={i} />
          )
        }
      </tbody>
    </table>
  );
}

export default Table;