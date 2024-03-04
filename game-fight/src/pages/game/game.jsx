import React, { useEffect, useState } from 'react'
import './game.css'
import * as ACTION from '../../redux/jeu'
import { useDispatch, useSelector } from 'react-redux'
import Data from "../../services/data.json"

const Game = () => {

  const [stats, setStats] = useState({
    name: String,
    picture: String,
    strenght: Number,
    stamina: Number,
    defense: Number,
    speed: Number,
    techniques: Array
  })

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

  const charaSelect = () =>{
    setStats()
  }


  return (
    <div className='container'>
      <h1>Choisissez votre personnage</h1>
      <div className='gameContainer'>
        {Array.isArray(store) && store.map((perso, index) =>
          <div key={index} className='charaContainer'>
            <h2>{perso.name}</h2>
            <img src={perso.picture} alt="" width={100}  height={100} />
            <div className='statContainer'>
              <p>Force : {perso.strenght}</p>
              <p>PV : {perso.stamina}</p>
              <p>Défense : {perso.defense}</p>
              <p>Vitesse : {perso.speed}</p>
            </div>
            <h2>Techniques :</h2>
            <div className='skillsContainer'>
              {perso.techniques.map((techs, id) =>
                <p key={id}>{techs}</p>
              )}
            </div>
            <button>Sélectionner le personnage</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Game