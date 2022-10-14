import { useState } from 'react';
import { Provider } from "react-redux/es/exports";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet
} from "react-router-dom";

import Levels from "../Levels/Levels";
import Level from "../Level/Level";
import store from "../../store/store";

import * as data from '../../assets/levels-data-list.json';
import './App.scss';

function App() {
  const [levels, setLevels] = useState(data.levels);

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Levels levels={levels}/>} />
            <Route path="/level/:id" element={<Level levels={levels}/>} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

const Layout = () => {
  return (
    <div className="container">
      <h1>Nonogram</h1>
      <Outlet/>
    </div>
  )
}

export default App;