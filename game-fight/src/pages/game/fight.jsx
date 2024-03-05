import React, { useEffect, useState } from 'react'
import './game.css'
import * as ACTION from '../../redux/jeu'
import { useDispatch, useSelector } from 'react-redux'
import Data from "../../services/data.json"
import './fight.css'

const Fight = () => {

  const store = useSelector(state => state.jeu.data);
  console.log(store);

  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(ACTION.FETCH_START());
    try{
      dispatch(ACTION.FETCH_SUCCESS(Data));
    }catch{
      dispatch(ACTION.FETCH_FAILURE());
    }
  }, [])

  const arrayStore0 = Array.isArray(store) && store[0];
  const arrayStore1 = Array.isArray(store) && store[1];

  const [playerHealth, setPlayerHealth] = useState(arrayStore0.stamina);
  const [ennemyHealth, setEnnemyHealth] = useState(arrayStore1.stamina);
  const [message, setMessage] = useState('');
  const [endMessage, setEndMessage] = useState('');
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)
  console.log(playerHealth);
  console.log(arrayStore0.stamina);
  console.log(ennemyHealth);

  const handleAtt = () =>{
    if(isPlayerTurn){
      let damage = Math.floor(Math.random() * 10000);
      const crit = Math.floor(Math.random() * 100);
      if(crit <= 10){
        damage *= 2
        setEnnemyHealth(prevHealth => Math.max(0, prevHealth - damage))
        console.log(damage);
        setMessage(`Coup critique !, Vous avez infligé ${damage} points de dégâts à l'ennemi !.`);
        setIsPlayerTurn((prevTurn) => !prevTurn)
      }else{
        setEnnemyHealth(prevHealth => Math.max(0, prevHealth - damage))
        setMessage(`Vous avez infligé ${damage} points de dégâts à l'ennemi !.`);
        setIsPlayerTurn((prevTurn) => !prevTurn)
      }
      console.log(crit);
    }
    else{
      let damage = Math.floor(Math.random() * 10000);
      const crit = Math.floor(Math.random() * 100);
      if(crit <= 10){
        damage *= 2
        setPlayerHealth(prevHealth => Math.max(0, prevHealth - damage))
        console.log(damage);
        setMessage(`Coup critique !, l'ennemi vous a infligé ${damage} points de dégâts !.`);
        setIsPlayerTurn((prevTurn) => !prevTurn)
      }else{
        setPlayerHealth(prevHealth => Math.max(0, prevHealth - damage))
        setMessage(`l'ennemi vous a infligé ${damage} points de dégâts !.`);
        setIsPlayerTurn((prevTurn) => !prevTurn)
      }
    }
    
  }

  console.log(endMessage);


  return (
    <div>
      <h1>{arrayStore0.name} VS {arrayStore1.name}</h1>
      <div className='fightContainer'>
        <div>
          <h2>{arrayStore0.name}</h2>
          <img src={arrayStore0.picture} width={100} height={100} alt="" />
          <p>{playerHealth}/{arrayStore0.stamina}</p>
        </div>
        <div>
          <h2>{arrayStore1.name}</h2>
          <img src={arrayStore1.picture} width={100} height={100} alt="" />
          <p>{ennemyHealth}/{arrayStore1.stamina}</p>
        </div>
      </div>
      <div>
        {arrayStore0.techniques.map((tech, index)=>
          <button key={index} onClick={handleAtt} disabled={!isPlayerTurn || playerHealth <= 0 || ennemyHealth <= 0}>{tech}</button>
        )}
      </div>
      <button onClick={handleAtt} disabled={isPlayerTurn || playerHealth <= 0 || ennemyHealth <= 0}>Tour de l'ennemi</button>
      <div>
        <p>{message}</p>
        <p>{ennemyHealth <= 0 ? `Bravo ! Vous avez vaincu ${arrayStore1.name} !` : ""}</p>
        <p>{playerHealth <= 0 ? `Dommage ! ${arrayStore1.name} Vous a vaincu!` : ""}</p>
      </div>
    </div>
  )
}

export default Fight