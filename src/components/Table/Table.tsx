import Row from './Row';
import KeysRow from "./KeysRow";

import './Table.scss';
import useTypedSelector from '../../hooks/useTypedSelector';

interface ILevel {
  id: number,
  name: string,
  code: string
}

function Table({ level }: { level: ILevel}) {
  const levelCode = level?.code || '';
  const size = Math.sqrt(levelCode.length);
  const { accomplishment } = useTypedSelector(state => state);

  const getEveryTenthValue = (string: string, start: number) => {
    const result = [];
    for (let i=start; i<string.length; i+=10) result.push(string[i]);
    return result.join('');
  };

  const getRowCode = (code: string, index: number) => {
    return code.slice(index * 10, index * 10 + 10);
  }

  return (
    <table className="table">
      <tbody className="table__body">
        <tr>
          <td></td>
          {
            [...Array(size)].map((x, i) =>
              <KeysRow levelCode={getEveryTenthValue(levelCode, i)} accomplishment={getEveryTenthValue(accomplishment, i)} key={i} />
            )
          }
        </tr>
        {
          [...Array(size)].map((x, i) =>
            <Row accomplishment={getRowCode(accomplishment, i)} size={size} rowCode={getRowCode(levelCode, i)} index={i} key={i} />
          )
        }
      </tbody>
    </table>
  );
}

export default Table;