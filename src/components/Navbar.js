import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import avatar from "../../src/img/avatar.png"

export const Navbar = () => {
  const [user, setUser] = useState();
  
   useEffect(() => {
     setUser(localStorage.getItem("userGduPush"));
   }, []);

  const handleClick = (e) => { 
    console.log("hice click en logout")
    localStorage.removeItem("userGduPush");
    localStorage.removeItem("tokenGduPush");
    window.location.replace("");
  }



  return (
    <div className="navbar">
      <Container>
        <strong className="text-center mx-auto ">GDU-Push</strong>
        <UncontrolledDropdown>
          <DropdownToggle caret className="btn btn-push-perfil">
            <img
              className="rounded-circle"
              src={avatar}
              alt="alt"
              style={{ width: "32px", height: "32px" }}
            />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>{user}</DropdownItem>
            <DropdownItem onClick={handleClick}>Salir</DropdownItem>

            <DropdownItem></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Container>
    </div>
  );
};
