import React, { useState, useEffect } from "react";
import { Input } from "../../Input";
import logoDisco from "../../../img/logos-disco-push.png";

import { CheckCircleFill } from "react-bootstrap-icons";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import { ExclamationOctagonFill } from "react-bootstrap-icons";

export const Disco = () => {
  const [titulo, setTítulo] = useState("Acá va el Título 😎");
  const [cuerpo, setCuerpo] = useState("¡Acá va el cuerpo del mensaje! 🚀");

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [fechaDeEnvio, setFechaDeEnvio] = useState("");
  const [horaDeEnvio, setHoraDeEnvio] = useState("00:00");
  const [fechaDeFin, setFechaDeFin] = useState("");
  const [horaDeFin, setHoraDeFin] = useState("00:00");
  const [store] = useState("Disco");
  const [type] = useState("ALL");
  const [dataLinkType, setDataLinkType] = useState("");
  const [dataLinkId, setDataLinkId] = useState("");
  const [token, setToken] = useState();
  const [alertaSuccess, setAlertaSuccess] = useState(false);
  const [alertaError, setAlertaError] = useState(false);
  const [alertaWarning, setAlertaWarning] = useState(false);
  const [message, setMessage] = useState(
    "Ha ocurrido un error, intente nuevamente en unos minutos"
  );

  useEffect(() => {
    setToken(localStorage.getItem("tokenGduPush"));
  }, []);

  const dataSelectType = [
    "product",
    "collection",
    "category",
    "home",
    "cart",
    "coupons",
  ];

  function handleChange(name, value) {
    if (name === "title") {
      setTitle(value);
      setTítulo(value);
    }
    if (name === "body") {
      setBody(value);
      setCuerpo(value);
    }
    if (name === "fechaDeEnvio") {
      setFechaDeEnvio(value);
    }
    if (name === "horaDeEnvio") {
      setHoraDeEnvio(value);
    }
    if (name === "fechaDeFin") {
      setFechaDeFin(value);
    }
    if (name === "horaDeFin") {
      setHoraDeFin(value);
    }
    if (name === "dataLinkId") {
      setDataLinkId(value);
    }
  }

  function handleChangeSelectType(e) {
    setDataLinkType(e.target.value);
  }

  function handleSubmit() {
    let centerEndDate = "";
    let scheduleDate = "";

    if (fechaDeEnvio === "") {
      console.log("fecha de envío vacía");
    } else {
      scheduleDate = fechaDeEnvio + "T" + horaDeEnvio + ":00";
    }

    if (fechaDeFin === "") {
      console.log("fecha de fin vacía");
    } else {
      centerEndDate = fechaDeFin + "T" + horaDeFin + ":00";
    }

    console.log(centerEndDate);
    console.log(fechaDeFin);

    let data = {
      data: { deep_link_type: dataLinkType, deep_link_id: dataLinkId },
    };

    let bodyDeDatos = {
      title,
      body,
      scheduleDate,
      centerEndDate,
      store,
      type,
      data,
    };

    // if (bodyDeDatos) {
    //   console.log("bodyDeDatos: ", bodyDeDatos);
    //   let txt = document.getElementById("muestro-mensaje");
    //   txt.innerHTML = JSON.stringify(bodyDeDatos);
    // }

    const requestOptions = {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      //body: bodyDeDatos,
      body: JSON.stringify(bodyDeDatos),
    };

    fetch("https://api-test.disco.com.uy/notifications/send", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.message === "Title field is empty or invalid.") {
          setMessage("Error, falta el título");
        } else if (data.message === "Body field is empty or invalid.") {
          setMessage("Error, falta el mensaje");
        } else if (data.message === "Schedule date is invalid") {
          setMessage("Error en fecha de envío");
        } else if (data.message === "Center end date is invalid") {
          setMessage("Error en fecha de finalización");
        }

        if (data.code === "SUCCESS") {
          setAlertaSuccess(true);
          setAlertaWarning(false);
          setAlertaError(false);
        } else {
          setAlertaSuccess(false);
          setAlertaWarning(true);
          setAlertaError(false);
        }
      })
      .catch((error) => {
        console.error("Error =>", error);
        setAlertaError(true);
      });
  }

  return (
    <div className="row mb-5">
      <div className="col-4 mx-5 my-5">
        <label className="form-label text-muted">ingrese un título</label>
        <Input
          attribute={{
            id: "title",
            name: "title",
            type: "text",
            placeholder: "",
          }}
          handleChange={handleChange}
        />
        <label className="form-label text-muted">ingrese un mensaje</label>
        <Input
          attribute={{
            id: "body",
            name: "body",
            type: "text",
            placeholder: "",
          }}
          handleChange={handleChange}
        />
        <label className="form-label text-muted">Selecciona una opción</label>
        <select
          className="form-select mb-3  text-muted"
          id="deepLinkType"
          name="deepLinkType"
          onChange={handleChangeSelectType}
        >
          <option value="" className="text-secondary"></option>
          {dataSelectType.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        <label className="form-label text-muted">
          id de producto, colección o categorías
        </label>
        <Input
          attribute={{
            id: "dataLinkId",
            name: "dataLinkId",
            type: "text",
            placeholder: "",
          }}
          handleChange={handleChange}
        />
        <div className="accordion mb-3" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed  text-muted"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Programar Fecha de Envío
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <div className="row g-2">
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="date"
                        className="form-control mb-3"
                        id="fechaDeEnvio"
                        name="fechaDeEnvio"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                      />

                      <label>Fecha de envío</label>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="time"
                        className="form-control mb-3"
                        id="horaDeEnvio"
                        name="horaDeEnvio"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                      />

                      <label>Hora de envío</label>
                    </div>
                  </div>
                </div>

                <div className="row g-2">
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="date"
                        className="form-control mb-3"
                        id="fechaDeFin"
                        name="fechaDeFin"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                      />

                      <label>Fecha de fin</label>
                    </div>
                  </div>
                  <div className="col-md">
                    <div className="form-floating">
                      <input
                        type="time"
                        className="form-control mb-3"
                        id="horaDeFin"
                        name="horaDeFin"
                        onChange={(e) =>
                          handleChange(e.target.name, e.target.value)
                        }
                      />

                      <label>Hora de fin</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn btn-push " onClick={handleSubmit}>
          Enviar
        </div>

        {alertaSuccess ? (
          <div
            className="alert alert-success mt-3 mx-auto text-center"
            role="alert"
          >
            <CheckCircleFill /> {}
            Envío Exitoso
          </div>
        ) : null}

        {alertaError ? (
          <div
            id="alerta-de-error"
            className="alert alert-danger mt-3 mx-auto text-center"
            role="alert"
          >
            <ExclamationOctagonFill /> {}
            Ha ocurrido un error, intente nuevamente en unos minutos
          </div>
        ) : null}

        {alertaWarning ? (
          <div
            id="alerta-de-error"
            className="alert alert-warning   mt-3 mx-auto text-center"
            role="alert"
          >
            <ExclamationTriangleFill /> {}
            {message}
          </div>
        ) : null}
      </div>

      <div className="col-4  mt-5">
        <div className="contenedor-push">
          <div className="row px-2 my-auto">
            <div className=" col-2 push-logo">
              <img src={logoDisco} alt="logoDisco" />
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
    </div>
  );
};
