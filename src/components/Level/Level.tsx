import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Table from "../Table/Table";
import ModeChanger from "../ModeChanger/ModeChanger";
import HealthBar from "../HealthBar/HealthBar";
import RetryModal from "../RetryModal/RetryModal";

import './Level.scss';

function Level({ levels }: {levels: any}) {
  const { id } = useParams();
  const level = id ? levels.filter((item: any) => item.id == id)[0] : levels[0];

  return (
    <>
      <div className="level__header">
        <h2 className="level__title">Level {id}</h2>
        <Link to=".." className="level__link"></Link>
      </div>
      <HealthBar/>
      <Table level={level}/>
      <ModeChanger/>
      <RetryModal size={+level.code.length}/>
    </>
  );
}

export default Level;