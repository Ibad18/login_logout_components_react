import LodgedOut from './LodgedOut'
import LodgedIn from './LodgedIn'
import './App.css'
import { useState } from 'react';

function App() {
  const [state, setState] = useState(false);
  const handleLoggedIn = () => {
    setState(true)
  }
  const handleLoggedOut = () => {
    setState(false)
  }

const handleSubmit = () => {
    handleLoggedIn();
};

  return (
    <>
      {state == false ?
        <button id='login_btn' onClick={handleLoggedIn}>Login</button> :
        <button id='logout_btn' onClick={handleLoggedOut}>Logout</button>}
      <br></br><br></br>
      {state == false ? <LodgedIn onButtonClick={handleSubmit} /> : LodgedOut()}


     
    </>
  )
}

export default App
