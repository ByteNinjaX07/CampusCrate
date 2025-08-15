import React from 'react';
import { Link } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import PostLost from '../pages/PostLost';
import PostFound from '../pages/PostFound';
import './Navbar.css';

const Navbar = () => {
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
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} id='logout-btn'>Log Out</button>   
            </li>
          </ul>
        </span>
      </nav>
    </div>
  )
}

export default Navbar
