import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

   const navigation = useNavigate()
   
  const handleSubmit = (event) => {
    event.preventDefault();
     
    const existingUserData = localStorage.getItem('userData');
    if (existingUserData) {
      navigation('/')
      return;
    }

    const userData = {
      username: username,
      password: password,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    setUsername('');
    setPassword('');
    alert('User signed up successfully!');
    navigation('/')
  };

  return (
    <div className="container">
      <h2 className="mt-5" style={{color:"navy"}}>Sign Up</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label style={{color:"navy"}} className="form-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label style={{color:"navy"}} className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-control"
            required
          />
        </div>
         <button type="submit" className="btn btn-primary">Sign Up</button> 
         <p style={{color:"red",margin:"10px"}}>First You can fill the above details to store your data in localStorage next signup button  navigated to login page</p>
      </form>
    </div>
  );
}

export default SignUpForm;


 