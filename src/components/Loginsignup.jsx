import React from 'react'
import { useNavigate } from 'react-router-dom';


const Loginsignup = () => {

  const navigate=useNavigate();//used to navigate to a 

  return (
    <div className='outerloginsignup'>
        <div className='loginsignup'>
        <button className='fields' onClick={() => navigate("/Login")}>Login</button>
        <button className='fields' onClick={() => navigate("/Signup")}>SignUp</button>
        </div>
    </div>
  )
}

export default Loginsignup;
