import { useParams, Link } from 'react-router-dom';

import Table from '../Table/Table';
import ModeChanger from '../ModeChanger/ModeChanger';
import HealthBar from '../HealthBar/HealthBar';
import ModalRetry from '../Modals/ModalRetry';

import './Level.scss';

function Level({ levels }: { levels: any }) {
  const { id } = useParams();
  const level = id ? levels.filter((item: any) => item.id === id)[0] : levels[0];
  const titleText = `Level ${level.order}`;

  return (
    <>
      <div className="level__header">
        <h2 className="level__title">
          {titleText}
        </h2>
        <Link to=".." className="level__link" />
      </div>
      <HealthBar />
      <Table level={level} />
      <ModeChanger />
      <ModalRetry size={+level.code.length} />
    </>
  );
}

export default Level;
