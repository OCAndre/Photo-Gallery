import React from 'react'



import '../styles/login.css'







function Login() {
    
  return (
    <div>
        <div className='loginbox' >
          <form>
        <label for='username'>Username</label>
        <input type='Username' placeholder='yourusername' id='username' name='username' />
        <label for='password'>Password</label>
        <input type='password' placeholder='yourpassword' id='password' name='password' />
          </form>
        </div>

        <a href='/Account'>
          Dont have an account? Click here to register!
        </a>
        
        
    </div>
  )
}

export default Login