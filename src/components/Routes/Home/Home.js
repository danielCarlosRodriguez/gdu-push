import React from 'react'
import fondo from "../../../img/fondo.jpg"
import logoGeant from "../../../img/logos-geant-push.png"
import logoDisco from "../../../img/logos-disco-push.png"
import logoDevoto from "../../../img/logos-devoto-push.png"
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="contenedor-image">
      <img src={fondo} alt="fondo" className="w-100" />
      <div className="centrado  text-white">
        <strong className="fs-0">GDU-Push</strong>
        <div className="fs-3">
          Plataforma de notificaciones app personalizadas
        </div>
        <div className="mt-5">
          <Link to="/geant">
            <img src={logoGeant} alt="Logo Géant" className="mx-3" />
          </Link>
          <Link to="/disco">
            <img src={logoDisco} alt="Logo Disco" className="mx-3" />
          </Link>
          <Link to="/devoto">
            <img src={logoDevoto} alt="Logo Devoto" className="mx-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
