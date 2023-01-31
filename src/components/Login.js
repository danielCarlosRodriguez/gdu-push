import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

export const Login = () => {
  const [alerta, setAlerta] = useState(false);
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [datos, setDatos] = useState({
    username: "us",
    password: "pas",
  });

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  console.log(token);

  if (token) {
    console.log("tengo token");
  } else {
    console.log("No tengo token");
  }

  const handleUser = (event) => {
    setUser(event.target.value);
    setAlerta(false);
    //console.log(event.target.value);
  };
  const handlePass = (event) => {
    setPass(event.target.value);
    setAlerta(false);
    //console.log(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    datos.username = user;
    datos.password = pass;

    setDatos(datos);
    console.log("JSON.stringify: ", JSON.stringify(datos));

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
      .then((responseData) => {
        console.log(responseData);

        if (responseData.code === "access_denied") {
          console.log("access_denied");
          setAlerta(true);
        } else {
          localStorage.setItem("token", responseData);
          setToken(localStorage.getItem("token"));
          window.location.replace("");
        }
      })
      .catch((err) => console.error("error del catch", err));
  };

  return (
    <div>
      <Container>
        <div>user: {user}</div>
        <div>pass: {pass}</div>

        {!token ? (
          <>
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

            {alerta ? (
              <div
                className="alert alert-danger w-25 mx-auto text-center"
                role="alert"
              >
                Usuario o Contraseña Incorrecta
              </div>
            ) : null}
          </>
        ) : (
          null
        )}
      </Container>
    </div>
  );
};
