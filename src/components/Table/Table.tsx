import { memo, useEffect } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import Row from './Row';
import KeysRow from "./KeysRow";
import useTypedSelector from '../../hooks/useTypedSelector';
import { initAccomplishment } from "../../store/slices/LevelSlice";

import './Table.scss';

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
  const isAccomplished = accomplishment.match(/1/g)?.length === levelCode.match(/1/g)?.length;
  const tableClasses = classNames({
    'table__wrapper': true,
    'table__wrapper_accomplished': isAccomplished
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initAccomplishment(levelCode.length));
  }, []);

  const getEveryTenthValue = (string: string, start: number) => {
    const result = [];
    for (let i=start; i<string.length; i+=size) result.push(string[i]);
    return result.join('');
  };

  const getRowCode = (code: string, index: number) => {
    return code.slice(index * size, index * size + size);
  }

  return (
    <div className={tableClasses}>
      <div className="table__overflow">
      <div className="table__rays"></div>
      </div>
      
      <table className="table">
        <tbody className="table__body" data-name={level.name}>
          <tr>
            <td></td>
            {
              [...Array(size)].map((x, i) =>
                <KeysRow
                  levelCode={getEveryTenthValue(levelCode, i)}
                  accomplishment={getEveryTenthValue(accomplishment, i)}
                  key={i}
                />
              )
            }
          </tr>
          {
            [...Array(size)].map((x, i) =>
              <Row
                accomplishment={getRowCode(accomplishment, i)}
                colorsCode={isAccomplished && level?.colorsCode}
                colors={isAccomplished && level?.colors}
                size={size}
                rowCode={getRowCode(levelCode, i)}
                index={i}
                key={i}
              />
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default memo(Table);