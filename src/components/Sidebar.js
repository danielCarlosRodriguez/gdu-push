import React from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import {BiMailSend} from "react-icons/bi"
import { BsTable } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";


export const Sidebar = () => {
  return (
    <div className="sidebar bg-dark">
      <ul>
        <li>
          <NavLink className="text-light rounded py-2 w-100 d-inline-block px-3" to="/" activeclassname="active">
            <FaIcons.FaHome  className="me-2"/> Inicio
          </NavLink>
        </li>
        <li>
          <NavLink className="text-light rounded py-2 w-100 d-inline-block px-3" to="/geant" activeclassname="active">
            <BiMailSend  className="me-2"/> Géant
          </NavLink>
        </li>

        <li>
          <NavLink className="text-light rounded py-2 w-100 d-inline-block px-3" to="/disco" activeclassname="active">
            <BiMailSend  className="me-2"/>
            Disco
          </NavLink>
        </li>

        <li>
          <NavLink className="text-light rounded py-2 w-100 d-inline-block px-3" to="/devoto" activeclassname="active">
            <BiMailSend  className="me-2"/>
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
