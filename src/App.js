import React from "react-router-dom";
//import { Dashboard } from "./components/Dashboard";
import { Login } from "./components/Login";



function App() {





  return (
    <>
      <Login/>
      {/* <Dashboard /> */}
      {/* <LoginContext.Provider value={{ estado, setEstado }}>
        {!estado ? (
          <div>
             <Login />{" "}
          </div>
        ) : (
          <div>
            
            <Dashboard />
          </div>
        )}

      
      </LoginContext.Provider> */}
    </>
  );
}

export default App;
