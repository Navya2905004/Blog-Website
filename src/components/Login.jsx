import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      navigate('/Home'); 
    }
  }, []);  //automatically logins if the user is present in the storage....

  const handleLogin = () => {
    if (!username || !password) { 
      setErrorMessage('All fields are required!');
      return;
    }

    if (username === 'Navya2905' && password === 'ABCD@1234') {
      localStorage.setItem('loggedInUser', username);
      navigate('/Home');
    } else {
      setErrorMessage('Invalid username or password!'); 
    }
  };

  return (
    <div className='outerloginsignup'>
    <div className='loginsignup'>
      <label>UserName:</label>
      <input 
        type="text" 
        placeholder='Username' 
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
      />

      <label>Password:</label>
      <div className='Password-Field'>
      <input 
            type={showPassword ? "text" : "password"}  
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}> 
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>


      <button className='fields' onClick={handleLogin}>Login</button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
    </div>
  );
};

export default Login;
