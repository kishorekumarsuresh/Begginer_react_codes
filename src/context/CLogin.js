import React from 'react'
import { useContext } from 'react'

import { LoginContext } from './LoginContext'

function CLogin() {
 
    const {setUsername,setShowProfile} = useContext(LoginContext)

  return (
    <div>
        
      <h2>Login page</h2>
      <label> Username
      <input 
        type="text"
        placeholder="Username"
        onChange={(e)=>{
            setUsername(e.target.value)
        }}
        />
        <br/>
        </label>
     <label>password
      <input 
        type="text"
        placeholder="password"
        />
        <br/>
        </label>
    
        <button onClick={()=>{setShowProfile(true)}}>Login</button>
    </div>
  )
}

export default CLogin
