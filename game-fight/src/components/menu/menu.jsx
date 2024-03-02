import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import './menu.css';

const Menu = () => {
  
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown, true)
  }, [])

  // Affiche le menu lorsqu'une touche est sélectionnée
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [titleOpen, setTitleOpen] = React.useState(false);

  const detectKeyDown = (e) =>{
    setIsMenuOpen(true);
    setTitleOpen(true)
  }
  

  return (
    <main className='menu'>
      <div className={`section-titre ${titleOpen ? 'moveTitle' : ''}`}>
        <h1 className='titre'>Game Fight</h1>
      </div>
      <div className={`section-menu ${isMenuOpen ? 'isOpen' : ''}`}>
        <nav>
          <ul>
            <li><Link to="../game">Jouer</Link></li>
            <li><Link to="">Personnages</Link></li>
            <li><Link to="">Quitter</Link></li>
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default Menu