/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import database from "../data/userDB";
import LoginContext from "../context/LoginContext";

export const Login = ({ children }) => {


  const [errorMessages, setErrorMessages] = useState({});
  const [logeado, setLogeado] = useState(false);
  const [userDataBase, setUserDataBase] = useState([...database.database]);

  const { estado, setEstado } = useContext(LoginContext);
  setEstado(logeado);
  console.log("logeado en login", logeado);
  console.log("estado en login ", estado);

  //console.log("userDataBase", userDataBase);
  const errors = {
    uname: "Usuario inválido",
    pass: "Password inválido",
  };

  const handleSubmit = (event) => {
    //Impedir que se vuelva a cargar la página
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Buscar usauario en baseDeDatos
    const userData = userDataBase.find((user) => user.username === uname.value);

    // Comparar información de usuario
    if (userData) {
      if (userData.password !== pass.value) {
        // Usuario inválido
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setLogeado(true);
      }
    } else {
      // Password inválido
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generar código JSX para mensaje de error
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );


  return (
    <div className="fondo-login">
      <div>Soy el Login {estado.toString()}</div>
      <Container className="text-center">
        <Row className="d-flex justify-content-center text-white text-center mx-auto mt-5 fs-3">
          <strong>GDU-Push</strong>
         
        </Row>

        <Row className="mt-2">
          {!logeado ? (
            <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <label>Username </label>
                  <input type="text" name="uname" required />
                  {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                  <label>Password </label>
                  <input type="password" name="pass" required />
                  {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                  <input type="submit" />
                </div>
              </form>
            </div>
          ) : (
            <div className="title">
              <h1>estado del login: {logeado.toString()}</h1>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};
