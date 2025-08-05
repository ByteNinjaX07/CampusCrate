import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import PostLost from './pages/PostLost.jsx';
import PostFound from './pages/PostFound.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Navbar from './components/Navbar.jsx';

// Create a router with nested routes

const router = createBrowserRouter([
  {
    path: "/",          // Main layout route
    element: <App />,   // App component with Navbar + Outlet
    children: [
      {
        path: "/lp",
        element: <LandingPage />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },    
      {
        path: "/PostLost",
        element: <PostLost />,
      },
      {
        path: "/PostFound",
        element: <PostFound />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-7q5xjqy43a8fheje.us.auth0.com"
    clientId="9CTRRUliurOnb6rFVxvtDnzsNnRl8HtJ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Auth0Provider>,
);
