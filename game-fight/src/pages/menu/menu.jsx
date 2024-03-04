import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import './menu.css';

const Menu = () => {
  

  // Affiche le menu lorsqu'une touche est sélectionnée
  useEffect(() => {
    document.addEventListener('keydown', detectKeyDown)    
  }, [])

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const detectKeyDown = (e) =>{
    setIsMenuOpen(true);
  }

  // Permet la navigation et la navigation avec les flèches du clavier
  const [selectedMenu, setSelectedMenu] = useState(0);
  const menus = ["Jouer", "Personnages", "Quitter"];
  const refMenu = useRef(null)

  const navigateMenu = (e) =>{
    switch (e.key) {
      case "ArrowUp":
        if(selectedMenu > 0){
          setSelectedMenu(indexMenu => indexMenu - 1)
          console.log(menus[selectedMenu]);
        }
        break;
    
      case "ArrowDown":
        if(selectedMenu < menus.length - 1){
          setSelectedMenu(indexMenu => indexMenu + 1)
          console.log(menus[selectedMenu]);
        }
        break;
    
      case "Enter":
      case "w":
        if(refMenu.current){
          refMenu.current.click();
          console.log('clicked !');
        }
        break;

      default:
        break;
    }
  }

  useEffect(() =>{
    document.addEventListener('keydown', navigateMenu)

    return () =>{
      document.removeEventListener('keydown', navigateMenu)
    };
  }, [selectedMenu])

  

  return (
    <main className='menu'>
      <div className={`section-titre ${isMenuOpen ? 'moveTitle' : ''}`}>
        <h1 className='titre'>Game Fight</h1>
      </div>
      <div className={`section-menu ${isMenuOpen ? 'isOpen' : ''}`}>
        <nav>
          <ul>
            {menus.map((items, index) =>(
              <li key={index} >
                <Link to={`../${items.toLowerCase()}`} className={index === selectedMenu ? 'menuSelected' : ''} ref={index === selectedMenu ? refMenu : null} tabIndex="0">{items}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default Menu