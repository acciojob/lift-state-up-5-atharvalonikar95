'use client'
import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div>
        {isLoggedIn ? <h1>You are logged in !</h1> : <Child setIsLoggedIn={setIsLoggedIn} />}
    </div>
  )
}

export default Parent
