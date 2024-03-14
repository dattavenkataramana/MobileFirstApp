import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && username === storedUserData.username && password === storedUserData.password) {
      navigate('/displayitems');
    } else {
      setError('Invalid username or password . Please sign up.');
    }
  };

  return (
    <div className="container">
      <h1 style={{color:"navy"}} className="mt-5">Login</h1>
      <form onSubmit={e => e.preventDefault()} className="mt-3">
        <div className="mb-3">
          <label style={{color:"navy"}} htmlFor="username" className="form-label">Username:</label>
          <input type="text" id="username" className="form-control" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label style={{color:"navy"}} htmlFor="password" className="form-label">Password:</label>
          <input type="password" id="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button onClick={handleLogin} className="btn btn-primary">Login</button>
      </form>
      {error && <p className="mt-3 text-danger">{error}</p>}
      <Link to='/signup'><button className="btn btn-secondary mt-3" type="button">Sign Up</button></Link>
    </div>
  );
};

export default Login;
