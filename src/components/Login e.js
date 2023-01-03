import React, { useState, useEffect } from "react";


export const Login = (props) => {
 

  const [loginEstado, setLoginEstado] = useState(false);
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

    setLoginEstado(true);
    console.log("loginEstado en click: ", loginEstado);

    //loginEstado ? <Navigate to="/dashboard"/> : console.log("me quedo tranqui")
  };



  return (
    <>
      <div className="wrapper fadeInDown mt-5">
        <div id="formContent">
          <div className="fadeIn first my-3">
         
          </div>

          <form>
            <input
              type="text"
              id="user"
              className="fadeIn second"
              name="user"
              placeholder="user"
              onChange={handleUser}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              onChange={handlePass}
            />
            <button className="btn btn-push my-3" onClick={handleClick}>
              enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
