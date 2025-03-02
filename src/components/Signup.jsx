import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const navigate=useNavigate();

  const handleSignup = () => {

    if (!username || !password || !confirmPw) 
    {
      setErrorMessage('All fields are required!');
      return;
    }
    
    if (password !== confirmPw) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    setErrorMessage('Account created successfully!'); 
    setTimeout(() => {
      navigate('/');
    }, 1500); 
    
  };

  return (
    <div className='outerloginsignup'>
      <div className='loginsignup'>
        <label>UserName or Email:</label>
        <input 
          type="text" 
          placeholder="Username Or Email" 
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


        <label>Confirm Password:</label>
        <div className='Password-Field'>
        <input 
              type={showPassword ? "text" : "password"}  
                    placeholder="Password" 
                    onChange={(e) => setConfirmPw(e.target.value)} 
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}> 
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
        </div>


        <button className='fields' onClick={handleSignup}>Sign Up</button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
    </div>
  );
};

export default Signup;
