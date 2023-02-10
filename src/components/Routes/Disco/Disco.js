import React, { useState, useEffect } from "react";
import { Input } from "../../Input";
import logoDisco from "../../../img/logos-disco-push-v1.png";

import { CheckCircleFill } from "react-bootstrap-icons";
import { ExclamationTriangleFill } from "react-bootstrap-icons";
import { ExclamationOctagonFill } from "react-bootstrap-icons";
import { Modal, Button } from "react-bootstrap";
import { Cart4 } from "react-bootstrap-icons";

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
  const [dataLinkIdValido, setDataLinkIdValido] = useState(false);
  const [token, setToken] = useState();
  const [alertaSuccess, setAlertaSuccess] = useState(false);
  const [alertaError, setAlertaError] = useState(false);
  const [alertaWarning, setAlertaWarning] = useState(false);
  const [continuarEnvio, setContinuarEnvio] = useState(false);
  const [checked, setChecked] = useState(false);
  const [inputId, setInputId] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(
    "Ha ocurrido un error, intente nuevamente en unos minutos"
  );

  //Pregunto si está logueado /////////////////////////////////////////////
  useEffect(() => {
    setToken(localStorage.getItem("tokenGduPush"));
  }, []);

  //Input select ///////////////////////////////////////////////////////////
  const dataSelectTypeAmigable = [
    "",
    "ir a la home",
    "link a un producto",
    "link a una colección",
    "link a una categoría",
    "ir al carrito",
    "ir a cupones",
  ];

  //Eventos al escribir en los input ////////////////////////////////////////
  function handleChange(name, value) {
    setAlertaWarning(false);
    setAlertaSuccess(false);
    setAlertaError(false);

    document.getElementById("title").classList.remove("is-invalid");
    document.getElementById("body").classList.remove("is-invalid");
    document.getElementById("deepLinkType").classList.remove("is-invalid");
    document.getElementById("fechaDeFin").classList.remove("is-invalid");
    document.getElementById("horaDeFin").classList.remove("is-invalid");

    document.getElementById("tooltip-titulo").classList.add("collapse");
    document.getElementById("tooltip-mensaje").classList.add("collapse");
    document.getElementById("tooltip-opcion").classList.add("collapse");

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
      setContinuarEnvio(true);
      //console.log("handler cambio a true ContinuarEnvio: ", continuarEnvio);
    }
    if (name === "horaDeFin") {
      setHoraDeFin(value);
    }
    if (name === "dataLinkId") {
      setDataLinkId(value);
    }
  }

  //Evento al seleccionar en el input select ///////////////////////////////
  function handleChangeSelectType(e) {
    setAlertaWarning(false);
    setAlertaSuccess(false);

    if (e.target.value === "") {
      setDataLinkType("");
      setInputId(false);
    } else if (e.target.value === "link a un producto") {
      setDataLinkType("product");
      setInputId(true);
    } else if (e.target.value === "link a una categoría") {
      setDataLinkType("category");
      setInputId(true);
    } else if (e.target.value === "link a una colección") {
      setDataLinkType("collection");
      setInputId(true);
    } else if (e.target.value === "ir al carrito") {
      setDataLinkType("cart");
      setInputId(false);
    } else if (e.target.value === "ir a cupones") {
      setDataLinkType("coupons");
      setInputId(false);
    } else {
      setDataLinkType("home");
      setInputId(false);
    }
    document.getElementById("tooltip-opcion").classList.add("collapse");
  }

  //Funciones para validaciones de input ///////////////////////////////////
  useEffect(() => {
    setMessage("");
  }, [dataLinkType]);

  useEffect(() => {
    //console.log("dataLinkType: ", dataLinkType);
    //console.log("dataLinkId: ", dataLinkId);
    setAlertaError(false);

    if (
      dataLinkType === "product" ||
      dataLinkType === "collection" ||
      dataLinkType === "category"
    ) {
      if (dataLinkId === "") {
        document.getElementById("dataLinkId").classList.add("is-invalid");
        document.getElementById("tooltip-id").classList.remove("collapse");
        setDataLinkIdValido(false);
        //console.log("setDataLinkIdValido false", dataLinkIdValido);
      } else {
        document.getElementById("dataLinkId").classList.remove("is-invalid");
        document.getElementById("tooltip-id").classList.add("collapse");
        setDataLinkIdValido(true);
        //console.log("setDataLinkIdValido true", dataLinkIdValido);
      }
    } else {
      setDataLinkId("");
      setDataLinkIdValido(true);
      //console.log("setDataLinkIdValido true", dataLinkIdValido);
    }
  }, [dataLinkType, dataLinkIdValido, dataLinkId]);

  //Funciones de confirmación de fecha de fin ///////////////////////////////////
  function handleSi() {
    //console.log("apreto Si");
    setContinuarEnvio(true);
    setShow(false);
  }

  function handleNo() {
    //console.log("apreto No");
    setShow(false);
  }

  //Función para envíar datos ///////////////////////////////////
  function handleSubmit() {
    let centerEndDate = "";
    let scheduleDate = "";

    if (fechaDeEnvio === "") {
      //console.log("fecha de envío vacía");
    } else {
      scheduleDate = fechaDeEnvio + "T" + horaDeEnvio + ":00";
    }

    if (fechaDeFin === "") {
      //console.log("fecha de fin vacía");
    } else {
      centerEndDate = fechaDeFin + "T" + horaDeFin + ":00";
    }

    let data = {
      data: { deep_link_type: dataLinkType, deep_link_id: dataLinkId },
    };

    if (title === "") {
      document.getElementById("title").classList.add("is-invalid");
      document.getElementById("tooltip-titulo").classList.remove("collapse");
    }

    if (body === "") {
      document.getElementById("body").classList.add("is-invalid");
      document.getElementById("tooltip-mensaje").classList.remove("collapse");
    }

    if (dataLinkType === "") {
      document.getElementById("deepLinkType").classList.add("is-invalid");
      document.getElementById("tooltip-opcion").classList.remove("collapse");
    }

    if (title && body && dataLinkType && dataLinkIdValido) {
      let bodyDeDatos = {
        title,
        body,
        scheduleDate,
        centerEndDate,
        store,
        type,
        data,
      };

      // Última validación, Fecha de fin //////////////////////////////
      if (!continuarEnvio) {
        //console.log("continuarEnvio false: ", continuarEnvio);
        document.getElementById("fechaDeFin").classList.add("is-invalid");
        document.getElementById("horaDeFin").classList.add("is-invalid");

        setShow(true);
      } else {
        setSpinner(true);

        // Muestro mensaje en html //////////////////////////////
        //if (bodyDeDatos) {
        //console.log("bodyDeDatos: ", bodyDeDatos);
        //let txt = document.getElementById("muestro-mensaje");
        //txt.innerHTML = JSON.stringify(bodyDeDatos);
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

        fetch(
          "https://api-test.disco.com.uy/notifications/send",
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setMessage(data.message);

            if (data.code === "SUCCESS") {
              setAlertaSuccess(true);
              setAlertaWarning(false);
              setAlertaError(false);
              setSpinner(false);
            } else {
              setAlertaSuccess(false);
              setAlertaWarning(true);
              setAlertaError(false);
              setSpinner(false);
            }
          })
          .catch((error) => {
            console.error("Error =>", error);
            setAlertaError(true);
            setSpinner(false);
          });
      }
    }
  }
  function handleCheckFechaDeEnvio(event) {
    setChecked(!checked);
  }

  return (
    <div className="col d-flex flex-column h-sm-100 ">
      <main className="row overflow-auto mt-5 mx-2">
        <div className="col-md-6 col-12 order-md-1 order-2 ">

          
          {/* Input Título //////////////////////////////////////////////*/}
          <div className="position-relative">
            <label className="form-label text-muted">Ingrese un título</label>
            <Input
              attribute={{
                id: "title",
                name: "title",
                type: "text",
                placeholder: "",
                maxLength: "22",
                className: `form-control mb-3`,
              }}
              handleChange={handleChange}
            />

            <button
              type="button"
              class="btn btn-dark position-absolute tooltip-position collapse"
              id="tooltip-titulo"
            >
              Falta Título{" "}
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="position-absolute top-100 start-50 translate-middle mt-1"
                fill="#212529"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
              </svg>
            </button>
          </div>

          
          {/* Input Mensaje //////////////////////////////////////////////*/}
          <div className="position-relative">
            <label className="form-label text-muted">Ingrese un mensaje</label>
            <Input
              attribute={{
                id: "body",
                name: "body",
                type: "text",
                placeholder: "",
                maxLength: "31",
                className: `form-control mb-3`,
              }}
              handleChange={handleChange}
            />

            <button
              type="button"
              className="btn btn-dark position-absolute tooltip-position collapse"
              id="tooltip-mensaje"
            >
              Falta Mensaje{" "}
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="position-absolute top-100 start-50 translate-middle mt-1"
                fill="#212529"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
              </svg>
            </button>
          </div>

          {/* Input Opción //////////////////////////////////////////////*/}
          <div className="position-relative">
            <label className="form-label text-muted">
              Selecciona una opción de destino
            </label>
            <select
              id="deepLinkType"
              className="form-select mb-3 text-muted"
              name="deepLinkType"
              onChange={handleChangeSelectType}
            >
              {dataSelectTypeAmigable.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <button
              type="button"
              className="btn btn-dark position-absolute tooltip-position collapse"
              id="tooltip-opcion"
            >
              Falta Opción{" "}
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="position-absolute top-100 start-50 translate-middle mt-1"
                fill="#212529"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
              </svg>
            </button>
          </div>

          {/* Input ID //////////////////////////////////////////////*/}
          {inputId ? (
            <>
              <div className="position-relative">
                <label className="form-label text-muted">
                  id de producto, colección o categorías
                </label>
                <Input
                  attribute={{
                    id: "dataLinkId",
                    name: "dataLinkId",
                    type: "text",
                    className: `form-control mb-3`,
                  }}
                  handleChange={handleChange}
                />

                <button
                  type="button"
                  class="btn btn-dark position-absolute tooltip-position collapse "
                  id="tooltip-id"
                >
                  Falta id{" "}
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="position-absolute top-100 start-50 translate-middle mt-1"
                    fill="#212529"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"></path>
                  </svg>
                </button>
              </div>
            </>
          ) : null}

          {/* Input Fecha de Fin //////////////////////////////////////////////*/}
          <label className="form-label text-muted">
            Fecha de fin del centro
          </label>
          <div className="row g-2">
            <div className="col-md">
              <div className="form-floating">
                <input
                  type="date"
                  className="form-control mb-3"
                  id="fechaDeFin"
                  name="fechaDeFin"
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
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
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />

                <label>Hora de fin</label>
              </div>
            </div>
          </div>

          {/* Input Fecha de envío //////////////////////////////////////////////*/}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="check-fecha-de-envio"
              onChange={handleCheckFechaDeEnvio}
            />
            <label className="form-check-label mb-2 ">
              Programar fecha de envío
            </label>
          </div>

          {checked ? (
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
          ) : null}

          {/* Botón Enviar //////////////////////////////////////////////*/}
          <div className="btn btn-push my-3 " onClick={handleSubmit}>
            Enviar
          </div>

          {/* Alertas ///////////////////////////////////////////////////*/}
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
              className="alert alert-warning mt-3 mx-auto text-center"
              role="alert"
            >
              <ExclamationTriangleFill /> {}
              {message}
            </div>
          ) : null}

          {spinner ? (
            <div className="row">
              <div className="spinner-border mx-auto" role="status"></div>
            </div>
          ) : null}
        </div>

        <div className="col-md-6 col-12 mb-5 order-md-2 order-1">
          <div className="contenedor-push">
            <div className="row px-2 my-auto">
              <div className=" col-2 push-logo">
                <img src={logoDisco} alt="logoDisco" />
              </div>
              <div className=" col-10  ps-4 text-start push-texto fs-6">
                <div>
                  <strong>{titulo}</strong>
                </div>
                <div>{cuerpo}</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="row bg-light py-4 mt-auto text-end">
        <div className="col">
          <Cart4 className="me-2" />
          e-commerce GDU | 2021
        </div>
      </footer>

      {/* Modal  ////////////////////////////////////////////////*/}
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Atención</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Se va a realizar el envío sin fecha de fin del centro de
          notificaciones. <br></br>
          Por defecto, la notificación tendrá una duración de 1 día<br></br>
          <div className="fw-bold "> ¿Continuar con el envío?</div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="px-3" variant="primary" onClick={handleSi}>
            Si
          </Button>
          <Button variant="secondary" onClick={handleNo}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
