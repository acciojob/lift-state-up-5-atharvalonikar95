'use client'
import React, { useState } from 'react'

const Child = ({ setIsLoggedIn }) => {
    const data = {
        username: '',
        password: ''
    }
    const [formData, setFormData] = useState(data)
    const handleChange = (e) => {
        setFormData(data=>({...formData, [e.target.name] : e.target.value})) // Update form data based on input changes
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle login logic here
        setIsLoggedIn(true) // This will update the state in the Parent component
        setFormData(data) // Reset form data
    }
    return (
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="Username" name='username' value={formData.username} onChange={ handleChange} />
            <input type="password" placeholder="Password" name='password' value={formData.password} onChange={ handleChange} />
            <button type="submit" >Login</button>

        </form>
    )
}

export default Child
