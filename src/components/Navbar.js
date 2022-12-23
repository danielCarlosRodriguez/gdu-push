import React from "react";
import { Container } from "react-bootstrap";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { LogoutButton } from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";






 
export const Navbar = () => {

  const { user } = useAuth0();


  return (
    <div className="navbar">
      <Container>
        <strong className=" text-white text-center mx-auto ">GDU-Push</strong>
        <UncontrolledDropdown>
          <DropdownToggle caret className="btn btn-push-perfil">
            <img
              className="rounded-circle"
              src={user.picture}
              alt="alt"
              style={{ width: "32px", height: "32px" }}
            />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>{user.name}</DropdownItem>
            <DropdownItem>{user.email}</DropdownItem>
            <DropdownItem>
              <LogoutButton />
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Container>

  
    </div>
  );
};
