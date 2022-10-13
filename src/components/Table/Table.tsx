import classNames from "classnames";

import Row from './Row';
import KeysRow from "./KeysRow";

import './Table.scss';
import useTypedSelector from '../../hooks/useTypedSelector';

interface ILevel {
  id: number,
  name: string,
  code: string,
  colorsCode: string,
  colors: string[]
}

function Table({ level }: { level: ILevel}) {
  const levelCode = level?.code || '';
  const size = Math.sqrt(levelCode.length);
  const { accomplishment } = useTypedSelector(state => state);
  const bodyClasses = classNames({
    'table__body': true,
    'table__body_colored': accomplishment.match(/1/g)?.length === levelCode.match(/1/g)?.length
  })

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
      <tbody className={bodyClasses}>
        <tr>
          <td></td>
          {
            [...Array(size)].map((x, i) =>
              <KeysRow levelCode={getEveryTenthValue(levelCode, i)} accomplishment={getEveryTenthValue(accomplishment, i)} key={i} />
            )
          }
        </tr>
        {
          accomplishment.match(/1/g)?.length === levelCode.match(/1/g)?.length 
            ? <TableColored code={level?.colorsCode} colors={level?.colors}/>
            : [...Array(size)].map((x, i) =>
              <Row accomplishment={getRowCode(accomplishment, i)} size={size} rowCode={getRowCode(levelCode, i)} index={i} key={i} />
            )
        }
      </tbody>
    </table>
  );
}

const TableColored = ({code, colors}: {code: string, colors: string[]}) => {
  return (
    <>
    {
          [...Array(10)].map((x, i) =>
            <tr key={i}>
              <td className="table__keys table__keys_theme_row table__keys_accomplished">10</td>
              {[...Array(10)].map((x, j) => {
                console.log(code.length, i*10 + j)
                return <td key={j} width={40} height={40} style={{backgroundColor: colors[parseInt(code[i*10 + j])]}} ></td>
              })}
            </tr>
          )
        }
    </>
        
  )
}

export default Table;