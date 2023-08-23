import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import Superpage from "./pages/Superpage";
import LandingPage from "./pages/LandingPage"; // Import the LandingPage component
import PrivateRoute from "./helpers/PrivateRoute";

const App = () => {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak} initOptions={{ pkceMethod: 'S256' }}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route                  // New landing page route           
              path="/landing" 
              element={
                <PrivateRoute>
                  <LandingPage />
                </PrivateRoute> 
              } 
            /> 
            <Route
              path="/secured"
              element={
                <PrivateRoute>
                  <SecuredPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Superpage />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
