import { useState } from 'react';
import './App.css';
import LoginSignup from './Loginsignup.jsx'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <LoginSignup/>
    </>
  )
}

export default App
