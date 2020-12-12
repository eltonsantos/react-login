import React from 'react';
import { useHistory } from 'react-router-dom';
import './Home.css';

const PagesHome = () => {

  const history = useHistory();

  function logout(){

    return history.push('/login');
  }

  return(
    <div className="pages-home">
      Parabéns, você conseguiu entrar na página secreta!
      <br />
      <button type="button" onClick={logout}>Sair</button>
    </div>
  )

};

export default PagesHome;
