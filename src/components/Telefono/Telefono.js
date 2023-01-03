import React, { useState } from "react";

import logoGeant from "../../img/logos-geant-push.png";

export const Telefono = ({ logo = logoGeant }) => {
  // eslint-disable-next-line no-unused-vars
  const [titulo, setTítulo] = useState("Acá va el Título 😎");
  // eslint-disable-next-line no-unused-vars
  const [cuerpo, setCuerpo] = useState("¡Acá va el cuerpo del mensaje! 🚀");

  // const inputChangeHandlerTexto = (ev) => {
  //   setTítulo(ev.target.value);
  // };

  // const inputChangeHandlerCuerpo = (ev) => {
  //   setCuerpo(ev.target.value);
  // };

  return (
    <div>
      <div className="contenedor-push">
        <div className="row px-2 my-auto">
          <div className=" col-2 push-logo">
            <img src={logo} alt="logoGeant" />
          </div>
          <div className=" col-10  ps-2 text-start push-texto fs-5">
            <div>
              <strong>{titulo}</strong>
            </div>
            <div>{cuerpo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
