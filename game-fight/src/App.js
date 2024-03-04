import './App.css';
import Menu from './pages/menu/menu';
import {Route, Routes} from "react-router-dom";
import Game from './pages/game/game';
import Login from './pages/login/login';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/jouer" element={<Game/>}/>
      </Routes>
    </div>
  );
}

export default App;
