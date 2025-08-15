import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import PostLost from './pages/PostLost.jsx';
import PostFound from './pages/PostFound.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Navbar from './components/Navbar.jsx';
import ItemCard from './components/ItemCard.jsx';

// Create router with proper structure
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
      </div>
    ),
  },
  {
    path: "/Dashboard/LostItems",
    element: (
      <div>
        <Navbar />
        <ItemCard type="lost" />
      </div>
    )
  },
  {
    path: "/Dashboard/FoundItems", 
    element: (
      <div>
        <Navbar />
        <ItemCard type="found" />
      </div>
    )
  },
  {
    path: "/PostLost",
    element: (
      <div>
        <Navbar />
        <PostLost />
      </div>
    ),
  },
  {
    path: "/PostFound",
    element: (
      <div>
        <Navbar />
        <PostFound />
      </div>
    ),
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-7q5xjqy43a8fheje.us.auth0.com"
    clientId="9CTRRUliurOnb6rFVxvtDnzsNnRl8HtJ"
    authorizationParams={{
      redirect_uri: window.location.origin + '/Dashboard',
    }}
  >
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Auth0Provider>,
);