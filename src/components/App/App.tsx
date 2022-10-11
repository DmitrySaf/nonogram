import { useState } from 'react';

import Table from "../Table/Table";
import ModeChanger from "../ModeChanger/ModeChanger";

import * as data from '../../assets/levels-data-list.json';
import './App.scss';

function App() {
  const [levels, setLevels] = useState(data.levels);

  return (
    <div className="container">
      <h1>Nonogram</h1>
      <Table level={levels[0]} />
      <ModeChanger />
    </div>
  );
}

export default App;