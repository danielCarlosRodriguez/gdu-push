import React, { useState, useEffect } from "react";


export const Login = () => {
  const [alerta, setAlerta] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useState([]);
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [datos, setDatos] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    setToken(localStorage.getItem("tokenGduPush"));
  }, []);

  //console.log(token);


  // if (token) {
  //   console.log("tengo token");
  // } else {
  //   console.log("No tengo token");
  // }

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
    //console.log("JSON.stringify: ", JSON.stringify(datos));

    fetch("https://api-test.disco.com.uy/auth/token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(datos),
    }) /*end fetch */
      .then((response) => response.json())
      .then((responseData) => {
        //console.log(responseData);
        //console.log(responseData.results);

        if (responseData.code === "access_denied") {
          //console.log("access_denied");
          setAlerta(true);
        } else {
          localStorage.setItem("tokenGduPush", responseData);
          localStorage.setItem("userGduPush", user);
          setToken(localStorage.getItem("token"));
          window.location.replace("");
        }
      })
      .catch((err) => console.error("error del catch", err));
  };

  return (
    <>
      <div className="">
        <div className="container vh-100">
          <div className="contenedor-formulario ">
            <div className="row ">
              <form className="shadow p-3 bg-light rounded mx-auto">
                <h1 className="text-center text-gris">GDU-Push</h1>
                <div className="text-center text-gris fs-6">
                  Bienvenido al gestor de env??os
                </div>
                <div className="text-center text-gris fs-6 mb-3">
                 Push App
                </div>
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
                <button className="btn btn-gris mt-3" onClick={handleClick}>
                  enviar
                </button>
              </form>
            </div>

            <div className="row">
              {alerta ? (
                <div
                  className="alert alert-danger mt-3 mx-auto text-center"
                  role="alert"
                >
                  Usuario o Contrase??a Incorrecta
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
