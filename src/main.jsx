import * as Sentry from "@sentry/react";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from  './App.jsx'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";


Sentry.init({
  dsn: "https://d674932a77e6d9b9ced1190d70fd4691@o4506876178464768.ingest.us.sentry.io/4506876181151744",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0, 
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Auth0Provider
        domain="YOUR_AUTH0_DOMAIN"
        clientId="YOUR_AUTH0_CLIENT_ID"
        authorizationParams={{ redirect_uri: window.location.origin }}
    >
        <App />
    </Auth0Provider>
  </React.StrictMode>,
);

