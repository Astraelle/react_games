import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <main className='menu'>
      <div className='section-titre'>
        <h1 className='titre'>Game Fight</h1>
        <p className='start'>Appuyez sur n'importe quel touche pour commencer</p>
      </div>
      <div className='section-menu'>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
    </main>
  )
}

export default Menu