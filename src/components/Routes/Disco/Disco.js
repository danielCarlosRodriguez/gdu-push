import React, { useState, useEffect } from "react";
import { Input } from "../../Input";
import logoDisco from "../../../img/logos-disco-push-v1.png";

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
  const [dataLinkIdValido, setDataLinkIdValido] = useState(false);
  const [token, setToken] = useState();
  const [alertaSuccess, setAlertaSuccess] = useState(false);
  const [alertaError, setAlertaError] = useState(false);
  const [alertaWarning, setAlertaWarning] = useState(false);
  const [alertaFechaDeFin, setAlertaFechaDeFin] = useState(false);
  const [continuarEnvio, setContinuarEnvio] = useState(false);
  const [checked, setChecked] = useState(false);
  const [inputId, setInputId] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const [message, setMessage] = useState(
    "Ha ocurrido un error, intente nuevamente en unos minutos"
  );

  let mensajeValidacion = "";

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
    setAlertaFechaDeFin(false);

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
      setAlertaFechaDeFin(false);
      console.log("handler cambio a true ContinuarEnvio: ", continuarEnvio);
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
    console.log("apreto Si");
    setContinuarEnvio(true);
    setAlertaFechaDeFin(false);
  }

  function handleNo() {
    console.log("apreto No");
    setAlertaFechaDeFin(false);
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
      //mensajeValidacion = mensajeValidacion + "Falta Título, " 
      //console.log("mensajeValidacion título; ", mensajeValidacion);
      document.getElementById("tooltip-titulo").classList.remove("collapse");
    }

    if (body === "") {
      document.getElementById("body").classList.add("is-invalid");
     //mensajeValidacion = mensajeValidacion + "Falta Mensaje, " 
     //console.log("mensajeValidacion body; ", mensajeValidacion);
      document.getElementById("tooltip-mensaje").classList.remove("collapse");
    }

    if (dataLinkType === "") {
      document.getElementById("deepLinkType").classList.add("is-invalid");
      //mensajeValidacion = mensajeValidacion + "Falta Opción de Destino";
      //console.log("dataLinkType: ", dataLinkType);
      document.getElementById("tooltip-opcion").classList.remove("collapse");
    }

    
    if (!continuarEnvio) {
      console.log("continuarEnvio false: ", continuarEnvio);
      setAlertaFechaDeFin(true);
      document.getElementById("fechaDeFin").classList.add("is-invalid");
      document.getElementById("horaDeFin").classList.add("is-invalid");
    }

    console.log("mensajeValidacion xxx; ", mensajeValidacion);
    setMessage(mensajeValidacion);

    if (title && body && dataLinkType && dataLinkIdValido && continuarEnvio) {
      let bodyDeDatos = {
        title,
        body,
        scheduleDate,
        centerEndDate,
        store,
        type,
        data,
      };

      

      console.log("continuarEnvio true: ", continuarEnvio);
      setSpinner(true);

      // Muestro mensaje en html //////////////////////////////
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
  function handleCheckFechaDeEnvio(event) {
    setChecked(!checked);
  }

  return (
    <div className="row mb-5">
      <div className="col-4 mx-5 my-5">
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

        <div className="contenedor-tooptip">
          <div
            class="speech-bubble speech-bubble-top collapse"
            id="tooltip-titulo"
          >
            <p>Falta título</p>
          </div>
        </div>

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

        <div className="contenedor-tooptip">
          <div
            class="speech-bubble speech-bubble-top collapse"
            id="tooltip-mensaje"
          >
            <p>Falta Mensaje</p>
          </div>
        </div>

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

        <div className="contenedor-tooptip">
          <div
            class="speech-bubble speech-bubble-top collapse"
            id="tooltip-opcion"
          >
            <p>Falta Opción</p>
          </div>
        </div>

        {inputId ? (
          <>
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

            <div className="contenedor-tooptip">
              <div
                class="speech-bubble speech-bubble-top collapse"
                id="tooltip-id"
              >
                <p>Falta id</p>
              </div>
            </div>
          </>
        ) : null}

        <label className="form-label text-muted">Fecha de fin del centro</label>
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

        {alertaFechaDeFin ? (
          <div
            id="alerta-de-error"
            className="alert alert-warning-gris mt-3 mx-auto text-center"
            role="alert"
          >
            <div>
              Se va a realizar el envío sin fecha de fin del centro de
              notificaciones.
            </div>
            <div>
              {" "}
              Por defecto, la notificación tendrá una duración de 1 día
            </div>
            <div className="fw-bold mt-3">¿Continuar con el envío?</div>
            <button
              type="button"
              className="btn btn-push mt-2 me-2 px-3"
              onClick={handleSi}
            >
              Si
            </button>
            <button
              type="button"
              className="btn btn-push mt-2 ms-2"
              onClick={handleNo}
            >
              No
            </button>
          </div>
        ) : null}

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
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
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
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                />

                <label>Hora de envío</label>
              </div>
            </div>
          </div>
        ) : null}

        <div className="btn btn-push mt-3" onClick={handleSubmit}>
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

      <div className="col-4  mt-5">
        <div className="contenedor-push">
          <div className="row px-2 my-auto">
            <div className=" col-2 push-logo">
              <img src={logoDisco} alt="logoDisco" />
            </div>
            <div className=" col-10  ps-2 text-start push-texto fs-6">
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
