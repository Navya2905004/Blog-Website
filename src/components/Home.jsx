import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  return (
    <div>
        <h1>Welcome Navya!</h1>
        <button className='fields'
        onClick={()=>
          {
            localStorage.removeItem('loggedInUser'); //removes the logginedInuser from localstorage
            navigate('/'); //goes to app component
          }}>Logout</button>
    </div>
  )
}

export default Home
