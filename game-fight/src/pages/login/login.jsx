import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate()

  const handleLogin = () => {
    // Simuler un processus d'authentification (remplacer par une logique d'authentification réelle)
    if (username === 'chapier' && password === 'mdp12345') {
      setAuthenticated(true);
      // Stocker l'état d'authentification dans le localStorage
      localStorage.setItem('authenticated', 'true');
      navigate('/menu')
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect');
    }
  };

//   const handleLogout = () => {
//     // Réinitialiser l'état d'authentification et supprimer l'entrée du localStorage
//     setAuthenticated(false);
//     localStorage.removeItem('authenticated');
//   };

  return (
    <div>
        <div>
          <label>Nom d'utilisateur:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <br />
          <label>Mot de passe:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button onClick={handleLogin}>Connexion</button>
        </div>
    </div>
  );
};

export default Login;
