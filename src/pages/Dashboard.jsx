import { useAuth0 } from "@auth0/auth0-react";
import './Dashboard.css'
import Navbar from '../components/Navbar';
import PostFound from "./PostFound";
import PostLost from "./PostLost";
import { Link } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";

const Dashboard = () => {
      const navigate = useNavigate();
      const { logout, user} = useAuth0();

      function handleLost() {
        navigate('/PostLost');
      }

      function handleFound() {
        navigate('/PostFound');
      }

    return (
      <>
        <div>
          <h1 id="user-greeting">HELLO user</h1>
          <h1>Welcome to the Dashboard!</h1>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/Dashboard/LostItems">Lost Items</Link>
                </li>
                <li>
                  <Link to="Dashboard/FoundItems">Found Items</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="dashboard-buttons">
            <button onClick={handleFound} className="btn">I Found </button>
            <button onClick={handleLost} className="btn">I Lost </button>
          </div>
          
          <div>
            <ItemCard />
          </div>
        
        </div>
      </>
      );
} 

export default Dashboard
