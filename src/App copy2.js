import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import { Login } from "./components/Routes/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="home">
        <Routes>
         
          <Route exact path="/home" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
