import React from "react";
import { Container } from "react-bootstrap";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";



 
export const Navbar = () => {





  return (
    <div className="navbar">
      <Container>
        <strong className=" text-white text-center mx-auto ">GDU-Push</strong>
        <UncontrolledDropdown>
          <DropdownToggle caret className="btn btn-push-perfil">
            imagen
            {/* <img
              className="rounded-circle"
              src={user.picture}
              alt="alt"
              style={{ width: "32px", height: "32px" }}
            /> */}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>user.name</DropdownItem>
            <DropdownItem>user.email</DropdownItem>
           
            <DropdownItem>
            
              
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Container>
    </div>
  );
};
