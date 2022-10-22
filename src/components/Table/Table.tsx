import { memo, useEffect } from 'react';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import Row from './Row';
import ColumnKeys from './ColumnKeys';
import RowKeys from './RowKeys';
import useTypedSelector from '../../hooks/useTypedSelector';
import TablePortal from '../TablePortal/TablePortal';
import { initAccomplishment } from '../../store/slices/LevelSlice';

import './Table.scss';

interface ILevel {
  id: number,
  name: string,
  code: string,
  colorsCode: string,
  colors: string[]
}

function Table({ level }: { level: ILevel }) {
  const { accomplishment } = useTypedSelector((state) => state);
  const { code } = level;
  const codeLenght = code.length;
  const size = Math.sqrt(codeLenght);
  const isAccomplished = accomplishment.match(/1/g)?.length === code.match(/1/g)?.length;
  const dispatch = useDispatch();
  const tableBlocksClasses = classNames({
    table__blocks: true,
    table__blocks_accomplished: isAccomplished,
  });

  useEffect(() => {
    dispatch(initAccomplishment(codeLenght));
  }, []);

  const getEveryTenthValue = (string: string, start: number) => {
    const result = [];
    for (let i = start; i < string.length; i += size) result.push(string[i]);
    return result.join('');
  };

  const getRowCode = (inputCode: string, i: number) => inputCode.slice(i * size, (i * size) + size);

  if (isAccomplished) {
    return (
      <TablePortal>
        <table className={tableBlocksClasses} data-name={level.name}>
          <tbody className="table__body" data-name={level.name}>
            {
            [...Array(size)].map((x, i) => (
              <Row
                accomplishment={getRowCode(accomplishment, i)}
                colorsCode={isAccomplished && level?.colorsCode}
                colors={isAccomplished && level?.colors}
                size={size}
                rowCode={getRowCode(code, i)}
                index={i}
                key={i}
              />
            ))
          }
          </tbody>
        </table>
      </TablePortal>
    );
  }
  return (
    <div className="table">
      <div className="table__empty-space" />
      <div className="table__column-keys">
        {
          [...Array(size)].map((x, i) => (
            <ColumnKeys
              levelCode={getEveryTenthValue(code, i)}
              accomplishment={getEveryTenthValue(accomplishment, i)}
              key={i}
            />
          ))
        }
      </div>
      <div className="table__row-keys">
        {
          [...Array(size)].map((x, i) => (
            <RowKeys
              levelCode={getRowCode(code, i)}
              accomplishment={getRowCode(accomplishment, i)}
              key={i}
            />
          ))
        }
      </div>
      <table className="table__blocks">
        <tbody className="table__body" data-name={level.name}>
          {
          [...Array(size)].map((x, i) => (
            <Row
              accomplishment={getRowCode(accomplishment, i)}
              colorsCode={isAccomplished && level?.colorsCode}
              colors={isAccomplished && level?.colors}
              size={size}
              rowCode={getRowCode(code, i)}
              index={i}
              key={i}
            />
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default memo(Table);
