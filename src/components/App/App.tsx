import { useState } from 'react';
import { Provider } from "react-redux/es/exports";

import Table from "../Table/Table";
import ModeChanger from "../ModeChanger/ModeChanger";
import HealthBar from "../HealthBar/HealthBar";
import RetryModal from "../RetryModal/RetryModal";
import store from "../../store/store";

import * as data from '../../assets/levels-data-list.json';
import './App.scss';

function App() {
  const [levels, setLevels] = useState(data.levels);

  return (
    <Provider store={store}>
      <div className="container">
        <h1>Nonogram</h1>
        <HealthBar />
        <Table level={levels[0]} />
        <ModeChanger />
        <RetryModal />
      </div>
    </Provider>
  );
}

export default App;