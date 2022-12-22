import React from "react";
import { NavLink } from "react-router-dom";
import { BsTable } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { MdMobileScreenShare } from "react-icons/md";


export const Sidebar = () => {
  return (
    <div className="sidebar bg-dark">
      <ul>
        
        <li>
          <NavLink className="text-light rounded py-2 w-100 d-inline-block px-3" to="/geant" activeclassname="active">
            <MdMobileScreenShare  className="me-2"/>Géant
          </NavLink>
        </li>

        <li>
          <NavLink className="text-light rounded py-2 w-100 d-inline-block px-3" to="/disco" activeclassname="active">
            <MdMobileScreenShare  className="me-2"/>
            Disco
          </NavLink>
        </li>

        <li>
          <NavLink className="text-light rounded py-2 w-100 d-inline-block px-3" to="/devoto" activeclassname="active">
            <MdMobileScreenShare  className="me-2"/>
            Devoto
          </NavLink>
        </li>

        <li>
          <NavLink className="text-light rounded py-2 w-100 d-inline-block px-3" to="/enviados" activeclassname="active"><BsTable className="me-2"/> Enviados</NavLink>
        </li>

        <li>
          <NavLink className="text-light rounded py-2 w-100 d-inline-block px-3" to="/estadisticas" activeclassname="active"><ImStatsDots className="me-2"/> Estadísticas</NavLink>
        </li>
      </ul>
    </div>
  );
};
