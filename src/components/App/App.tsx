import { Provider } from 'react-redux/es/exports';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Levels from '../Levels/Levels';
import Level from '../Level/Level';
import Layout from './Layout';
import store from '../../store/store';

import * as data from '../../assets/levels-data-list.json';
import './App.scss';

function App() {
  const { levels } = data;

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/nonogram" element={<Layout />}>
            <Route index element={<Levels levels={levels} />} />
            <Route path="level/:id" element={<Level levels={levels} />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
