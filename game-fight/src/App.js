import { useState } from 'react';
import './App.css';
import Menu from './components/menu/menu';

function App() {

  const [screen, setScreen] = useState('Start')

  return (
    <div className="App">
      {screen === 'Start' && <Menu/>}
    </div>
  );
}

export default App;
