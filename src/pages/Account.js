import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/account.css'








function Account() {
    const navigate = useNavigate();

  return (
    <div className='form1'>
    <form>
        <label for='email'>Email</label>
        <input type='email' placeholder='youremail@email.com' id='email' name='email' />
        <label for='username'>Username</label>
        <input type='Username' placeholder='yourusername' id='username' name='username' />
        <label for='password'>Password</label>
        <input type='password' placeholder='yourpassword' id='password' name='password' />
    </form>
    <button  className='button2' onClick={() => navigate('/')}>Create Account</button>
    
    </div>
  )
}

export default Account



