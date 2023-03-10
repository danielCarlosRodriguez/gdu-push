import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "./Sidebar";

import { Home } from "./Routes/Home/Home";
import { Geant } from "./Routes/Geant/Geant";
import { Disco } from "./Routes/Disco/Disco";
import { Devoto } from "./Routes/Devoto/Devoto";
import { Enviados } from "./Routes/Enviados/Enviados";
import { Estadisticas } from "./Routes/Estadisticas/Estadisticas";
import { MensajePush } from "./Routes/MensajePush/MensajePush";




export const Dashboard = () => {


  

  return (
    <BrowserRouter>
      <div className="container-fluid overflow-hidden">
        <div className="row vh-100 overflow-auto">
          <Sidebar />

          

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/geant" element={<Geant />} />
            <Route exact path="/disco" element={<Disco />} />
            <Route exact path="/devoto" element={<Devoto />} />
            <Route exact path="/enviados" element={<Enviados />} />
            <Route exact path="/estadisticas" element={<Estadisticas />} />
            <Route exact path="/mensaje" element={<MensajePush />} />
          </Routes>





        </div>
      </div>
    </BrowserRouter>
  );
};

