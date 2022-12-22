import React from "react-router-dom";
import "./App.scss";
import { Inicio } from "./components/Inicio";
import { Dashboard } from "./components/Dashboard";


function App() {

 const status = true

  return (
    <>{!status ? <Inicio /> : <Dashboard />}</>

    
  );
}

export default App;
