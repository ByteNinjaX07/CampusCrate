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
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
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
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
