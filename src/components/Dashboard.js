import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

import { Geant } from "./Routes/Geant/Geant";
import { Disco } from "./Routes/Disco/Disco";
import { Devoto } from "./Routes/Devoto/Devoto";
import { Enviados } from "./Routes/Enviados/Enviados";
import { Estadisticas } from "./Routes/Estadisticas/Estadisticas";
import { MensajePush } from './Routes/MensajePush/MensajePush';






export const Dashboard = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="content w-100">
          <Navbar />
        
          <Routes>
            <Route exact path="/geant" element={<Geant />} />
            <Route exact path="/disco" element={<Disco />} />
            <Route exact path="/devoto" element={<Devoto />} />
            <Route exact path="/enviados" element={<Enviados />} />
            <Route exact path="/estadisticas" element={<Estadisticas />} />
            <Route exact path="/mensaje" element={<MensajePush/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
