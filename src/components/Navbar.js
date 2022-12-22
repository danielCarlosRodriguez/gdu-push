import React from "react";
import { Container } from "react-bootstrap";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

import { Perfil } from "./Perfil";

 const nombre = Perfil.nombre
 const email = Perfil.email;
 const logout = Perfil.logout;
 
export const Navbar = () => {
  return (
    <div className="navbar">
      <Container>
        <strong className=" text-white text-center mx-auto ">GDU-Push</strong>
        <UncontrolledDropdown>
          <DropdownToggle caret className="btn btn-push-perfil">
            <img
              className="rounded-circle"
              src="https://github.com/mdo.png"
              alt="alt"
              style={{ width: "32px", height: "32px" }}
            />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem >{nombre}</DropdownItem>
            <DropdownItem>{email}</DropdownItem>
            <DropdownItem >{logout}</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Container>
    </div>
  );
};
