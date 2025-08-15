import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react'; // Added missing import
import './Navbar.css';

const Navbar = () => {
  const { logout } = useAuth0(); // Added missing hook

  return (
    <div>
      <nav>
        <span>
          <ul className="navbar">
            <li>
              <h1>CampusCrate</h1>
            </li>
            <li>
              <Link to="/Dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/PostLost">Post Lost Item</Link>
            </li>
            <li>
              <Link to="/PostFound">Post Found Item</Link>
            </li>
            <li>
              <button 
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} 
                id='logout-btn'
              >
                Log Out
              </button>   
            </li>
          </ul>
        </span>
      </nav>
    </div>
  )
}

export default Navbar;