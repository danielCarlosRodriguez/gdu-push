import React, { useState } from "react";
import { Container } from "react-bootstrap";

export const Login = () => {
  const [user, setUser] = useState([]);
  const [pass, setPass] = useState([]);
  const [datos, setDatos] = useState({
    username: "us",
    password: "pas",
  });

 

  const handleUser = (event) => {
    setUser(event.target.value);
    //console.log(event.target.value);
  };
  const handlePass = (event) => {
    setPass(event.target.value);
    //console.log(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    datos.username = user;
    datos.password = pass;

    setDatos(datos);
    console.log("datos clcik: ", datos);

    fetch("https://api-test.disco.com.uy/auth/token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      //body: JSON.stringify({ username: user, password: pass, }),
      body: JSON.stringify(datos),
    }) /*end fetch */
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj.results);
      })
      .catch((err) => console.error(err));

  };

  return (
    <div>
      <Container>
        <div>user: {user}</div>
        <div>pass: {pass}</div>

        <div className="bg-light shadow p-3 mb-5 bg-body rounded w-25 mx-auto d-flex">
          <form className="">
            <label className="form-label">Email address</label>
            <input
              type="user"
              className="form-control"
              id="user"
              onChange={handleUser}
            ></input>
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={handlePass}
            ></input>
            <button className="btn btn-primary mt-3" onClick={handleClick}>
              enviar
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};
