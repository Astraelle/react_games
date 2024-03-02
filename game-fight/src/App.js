import './App.css';
import Menu from './components/menu/menu';
import {Route, Routes} from "react-router-dom";
import Game from './components/game/game';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu/>}>
        <Route path="/game" element={<Game/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
