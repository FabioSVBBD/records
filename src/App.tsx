import { Router } from './router/router';
import { Auth0Provider } from '@auth0/auth0-react';
import './App.css';

export const App = () => {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN || ''}
      clientId={process.env.REACT_APP_CLIENT_ID || ''}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <Router />
    </Auth0Provider>
  );
};
