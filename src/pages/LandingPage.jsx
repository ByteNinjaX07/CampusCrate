import React from 'react'
import './LandingPage.css'
import Dashboard from './Dashboard';
import { useAuth0 } from '@auth0/auth0-react';

const LandingPage = () => {

  const { loginWithRedirect } = useAuth0();
  // Assuming props.isLoggedIn is passed to the component to check login status
  // If not logged in, show the login/signup options
  return(

    <div>
      <a href="localhost:5173">
        <h1>CampusCrate.in</h1>
      </a>
      

      <div className='short-desc'>

        <p id='p1'>
          Lost & Found 
        </p>
        <p id='p2'>
          System for college
        </p>
          
        <button onClick={() => loginWithRedirect()}>Register/Login</button>
      
      </div>
      
      
    </div>
  )
  }

export default LandingPage