import './App.css'
import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './pages/Dashboard.jsx'

function App() {
  const { user, loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  
  // Show loading while Auth0 is initializing
  if (isLoading) {
    return <div>Loading...</div>;
  }
    
  return (
    <>
      <div>
        <h1>CampusCrate.in</h1>
        <p>Lost & Found System for college</p>
        
        <div>
          {isAuthenticated ? (
            <Dashboard />
          ) : (
            <button onClick={() => loginWithRedirect()}>
              Register/Login
            </button>
          )}
        </div>
      </div>
    </>
  )
}

export default App