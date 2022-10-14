import { useParams } from "react-router-dom";

import Table from "../Table/Table";
import ModeChanger from "../ModeChanger/ModeChanger";
import HealthBar from "../HealthBar/HealthBar";
import RetryModal from "../RetryModal/RetryModal";

function Level({ levels }: {levels: any}) {
  const { id } = useParams();
  const level = id ? levels.filter((item: any) => item.id == id)[0] : levels[0];

  return (
    <>
      <HealthBar/>
      <Table level={level}/>
      <ModeChanger/>
      <RetryModal/>
    </>
  );
}

export default Level;