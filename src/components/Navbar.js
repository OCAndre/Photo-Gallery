import React from 'react';
import Logo from '../assets/backround.png';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className="navbar" >
        
        <Link to='/'> <img className="imgtag" src={Logo} />  </Link>
        <Link className="rest" to='/restaurants'> Popular Restaurants </Link>
        <Link className="login" to='/user'> Login/Create Account </Link>
           
        </div>
        
        
    
    
    
  )
}

export default Navbar