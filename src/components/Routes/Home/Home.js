import React from 'react'
import fondo from "../../../img/fondo2.png"

export const Home = () => {
  return (
    <div className="col d-flex flex-column h-sm-100 bg-dark">
      <div className="contenedor-image ">
        <img src={fondo} alt="fondo" className="w-100" />
      </div>
    </div>
  );
}
