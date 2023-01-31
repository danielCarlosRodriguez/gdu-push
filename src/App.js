import { useState, useEffect } from "react";

import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);



  
  return <>{token ? <Dashboard /> : <Login />}</>;
}

export default App;
