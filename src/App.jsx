import './App.css'
import React from 'react'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx'
import PostLost from './pages/PostLost.jsx'
import PostFound from './pages/PostFound.jsx'
import LandingPage from './pages/LandingPage.jsx' 
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar.jsx';

function App() {
      
    const { user,loginWithRedirect,isAuthenticated } = useAuth0();
      // Assuming props.isLoggedIn is passed to the component to check login status
      // If not logged in, show the login/signup options
    return(
      <>
      <div>

        <h1>CampusCrate.in</h1>
        <p>
          Lost & Found System for college
        </p>
        <div>
          {isAuthenticated ? (<Dashboard/>) : (
            <button onClick={(e) => loginWithRedirect()}>Register/Login</button>
          )}
        </div>
        
      </div>
      </>
      
    )
}

export default App
