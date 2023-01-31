import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";

export const Login = () => {
  //const navi = useNavigate();

  // const getTokenLocalStorage = () => {
  //   let token = localStorage.getItem("");
  //   console.log("token: ", token);
  // };

  // getTokenLocalStorage();

  //const [loginEstado, setLoginEstado] = useState(false);

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

    //setLoginEstado(true);
    //console.log("loginEstado: ", loginEstado);

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
        console.log("access_denied")
        setAlerta(true);
      } else {
      localStorage.setItem("token", responseData);
      setToken(localStorage.getItem("token"));
      }

              
        

        

      })
      .catch((err) => console.error("error del catch", err));
  };

  //eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxY2YwM2JmNS1hYjVlLTQ4NjAtOTFmMS0wYjEyMjVkZTgwMzAiLCJpYXQiOjE2NzUxNzAxMjksInN1YiI6ImNhOGQ0MDEzLTg5MTktNDQ4OS05ZGZkLTA4NzYyOGVlNjhiYyIsImlzcyI6Imh0dHBzOi8vZ2R1LWFwaS5oZXJva3VhcHAuY29tIn0.5zw18u4vhTVTOQCjOhvGOJ9Idf6Nyay3uOkqAlpFWU8MTT9KSw8-rGLkL50pMK6UjHDr4KDc5sEps9omhCXrSQ

  //  useEffect(() => {
  //    console.log("loginEstado en useEffect: ", loginEstado);
  //    loginEstado ? navi("/dashboard") : console.log("me quedo tranqui");
  //  }, [loginEstado]);

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

            {alerta ?
              <div
                className="alert alert-danger w-25 mx-auto text-center"
                role="alert"
              >
                Usuario o contraseña incorrecta
              </div>
              : null
            }
          </>
        ) : (
          <>
            <h1>tengo token</h1>
          </>
        )}
      </Container>
    </div>
  );
};
