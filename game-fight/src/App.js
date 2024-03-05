import './App.css';
import Menu from './pages/menu/menu';
import {Route, Routes} from "react-router-dom";
import Game from './pages/game/game';
import Login from './pages/login/login';
import Fight from './pages/game/fight';
import Fight2 from './pages/game/fight2';
import Perso from './pages/characters/characters';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/personnages" element={<Perso/>}/>
        <Route path="/jouer" element={<Game/>}/>
        <Route path="/jouer/fight1" element={<Fight/>}/>
        <Route path="/jouer/fight2" element={<Fight2/>}/>
      </Routes>
    </div>
  );
}

export default App;
