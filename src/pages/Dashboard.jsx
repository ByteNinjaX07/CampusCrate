import { useAuth0 } from "@auth0/auth0-react";
import './Dashboard.css'
import { Link, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  const handleLost = () => {
    navigate('/PostLost');
  };

  const handleFound = () => {
    navigate('/PostFound');
  };

  if (!isAuthenticated) {
    return <div>Please login to access the dashboard</div>;
  }

  return (
    <>
      <div>
        <h1 id="user-greeting">HELLO {user?.name || 'User'}</h1>
        <h2>Welcome to the Dashboard!</h2>
        
        <div className="dashboard-buttons">
          <button onClick={handleFound} className="btn">
            I Found Something
          </button>
          <button onClick={handleLost} className="btn">
            I Lost Something
          </button>
        </div>
        
        <div style={{ marginTop: '30px' }}>
          <h3>Recent Items</h3>
          <ItemCard />
        </div>
      </div>
    </>
  );
} 

export default Dashboard;