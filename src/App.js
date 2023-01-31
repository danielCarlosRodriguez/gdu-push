import React from "react-router-dom";

import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard"



function App() {
 

  return (
    <>
      {/* <Dashboard /> */}
      <Login />

      {/*
      <Login />

      <BrowserRouter>
        <Routes>
         
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

      <LoginContext.Provider value={{ loginEstado, setLoginEstado }}>
        {loginEstado ? (
          <>
            <Login />
           
          </>
        ) : (
          <>
            <Dashboard />
          </>
        )}
      </LoginContext.Provider> */}
    </>
  );
}

export default App;
