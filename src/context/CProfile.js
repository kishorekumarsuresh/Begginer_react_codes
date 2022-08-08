import React from 'react'
import { useContext } from 'react'
import { LoginContext } from './LoginContext'

function CProfile() {

    const {username} = useContext(LoginContext)
    const {age} = useContext(LoginContext)
  return (
    <div>
      <h2>Profile page</h2>

      <p>Username:{username} </p>
      <p>Age : {age} </p>
    </div>
  )
}

export default CProfile
