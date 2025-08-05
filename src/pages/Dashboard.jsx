import { useAuth0 } from "@auth0/auth0-react";
import './Dashboard.css'
import Navbar from '../components/Navbar';
import PostFound from "./PostFound";
import PostLost from "./PostLost";
const Dashboard = () => {

  
  const handlePostFound = () => {
    return(
      <div>
        <PostFound />
      </div>
    )
  };

  const handlePostLost = () => {
    return(
      <div>
        <PostLost />
      </div>
    )
  };

  return (
    <div>

      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
      </button>

    
      <h1>HELLO jee </h1>
      <p>Welcome to the Dashboard!</p>
      <p>Here you can manage your lost and found items.</p>

      <button onClick={handlePostFound} className="btn">I Found Something</button>
      <button onClick={handlePostLost} className="btn">I Lost Something</button>
    </div>
  )
}

export default Dashboard
