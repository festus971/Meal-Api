import React, { useState } from 'react';


const Login = () => {
    const [formData, setFormData] = useState({
        username: "",
        password:""
    })
  
    function handleSubmit(event) {
        event.preventDefault();
        
    }
     
    function handleChange(e) {
        const key = e.target.id
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }
    
  return (
      <div className='login'>
          <form onSubmit={handleSubmit}>
              <h1>Create an Account</h1>
              <label htmlFor='username'>Username</label>
              <input type="text" id="username" value={formData.username} onChange={handleChange} />
              
              <label htmlFor='password'>Password</label>
              <input type="text" id="password" value={formData.password} onChange={handleChange} />
              
              <input type="submit" value="Sign Up" />
              
          
          </form>
      
      </div>
  )
}

export default Login