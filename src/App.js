import React from "react-router-dom";
import "./App.scss";

import { Dashboard } from "./components/Dashboard";
import { LoginButton } from "./components/LoginButton";

import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./components/Login";


function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <h1>Loading...</h1>;

 console.log(isAuthenticated);





  return (
    <>
      {!isAuthenticated ? (
        <Login>
          <LoginButton />
        </Login>
      ) : (
        <Dashboard/>
        
         
      )}
    </>
  );
}

export default App;
