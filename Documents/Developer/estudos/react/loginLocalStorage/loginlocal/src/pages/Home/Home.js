import "./Home.css"

import useAuth from '../../hooks/useAuth';

import { useNavigate } from 'react-router-dom';

import { useState } from 'react';



const Home = () => {
  const {user} = useAuth();

  const {logOut} = useAuth();

  const Navigate = useNavigate();

  const handleOut = () => {
    logOut()

    Navigate("/login");
  }
  return (
    <div className='home_Container'>
      <h2>Bem-vindo {user.email}</h2>
      <p onClick={() => handleOut()}>Sair</p>
    </div>
  )
}

export default Home