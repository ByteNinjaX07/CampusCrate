import React from 'react'
import './LandingPage.css'
import Dashboard from './Dashboard';
import { useAuth0 } from '@auth0/auth0-react';

const isLoggedIn = false; // This should be dynamically set based on authentication status

const LandingPage = (props) => {

  const { loginWithRedirect } = useAuth0();
  // Assuming props.isLoggedIn is passed to the component to check login status
  // If not logged in, show the login/signup options
  return(

    <div>

      <h1>Welcome to CampusCrate</h1>
      <p>
        Lost & Found System for college
      </p>
      <button onClick={() => loginWithRedirect()}>Register/Login</button>
      
    </div>
  )
  }

export default LandingPage