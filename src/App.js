import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./components/Routes/Home/Home";
import { Geant } from "./components/Routes/Geant/Geant";
import { Disco } from "./components/Routes/Disco/Disco";
import { Devoto } from "./components/Routes/Devoto/Devoto";
import { Enviados } from "./components/Routes/Enviados/Enviados";
import { Estadisticas } from "./components/Routes/Estadisticas/Estadisticas";


function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/geant" element={<Geant />} />
            <Route exact path="/disco" element={<Disco />} />
            <Route exact path="/devoto" element={<Devoto />} />
            <Route exact path="/enviados" element={<Enviados />} />
            <Route exact path="/estadisticas" element={<Estadisticas />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
