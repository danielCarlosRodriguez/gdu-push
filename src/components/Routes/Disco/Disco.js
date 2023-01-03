import React, { useState } from "react";
import { Input } from "../../Input";

export const Disco = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [fechaDeEnvio, setFechaDeEnvio] = useState("");
  const [horaDeEnvio, setHoraDeEnvio] = useState("");
  const [fechaDeFin, setFechaDeFin] = useState("");
  const [horaDeFin, setHoraDeFin] = useState("");
  const [store] = useState("Disco");
  const [type] = useState("ALL");
  const [dataLinkType, setDataLinkType] = useState("");
  const [dataLinkId, setDataLinkId] = useState("");

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
    }
    if (name === "body") {
      setBody(value);
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
      //let cod = document.getElementById("data").value;

      setDataLinkId(value);
    }
  }

  function handleChangeSelectType(e) {
    setDataLinkType(e.target.value);
  }

  function handleSubmit() {
    let centerEndDate = fechaDeFin + "T" + horaDeFin + ":00";
    let scheduleDate = fechaDeEnvio + "T" + horaDeEnvio + ":00";

    let data = {
      data: { deep_link_type: dataLinkType, deep_link_id: dataLinkId },
    };

    let bodyDeDatos = {
      title,
      body,
      centerEndDate,
      scheduleDate,
      store,
      type,
      data,
    };
    if (bodyDeDatos) {
      console.log("bodyDeDatos: ", bodyDeDatos);
      let txt = document.getElementById("muestro-mensaje");
      txt.innerHTML = JSON.stringify(bodyDeDatos);
    }

    const requestOptions = {
      method: "POST",

      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: bodyDeDatos,
      //body: JSON.stringify({ title: "React POST Request Example" }),
    };
    fetch("https://api-test.disco.com.uy/notifications/send", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  }

  return (
    <div className="col-4 ms-5 mt-5">
      <Input
        attribute={{
          id: "title",
          name: "title",
          type: "text",
          placeholder: "ingrese un título",
        }}
        handleChange={handleChange}
      />
      <Input
        attribute={{
          id: "body",
          name: "body",
          type: "text",
          placeholder: "ingrese un mensaje",
        }}
        handleChange={handleChange}
      />

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

            <label for="floatingInputGrid">Fecha de envío</label>
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

            <label for="floatingSelectGrid">Hora de envío</label>
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
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />

            <label for="floatingInputGrid">Fecha de fin</label>
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

            <label for="floatingSelectGrid">Hora de fin</label>
          </div>
        </div>
      </div>

      <select
        className="form-select mb-3"
        id="deepLinkType"
        name="deepLinkType"
        onChange={handleChangeSelectType}
      >
        <option value="" className="text-secondary">
          Selecciona una opción
        </option>
        {dataSelectType.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>

      <Input
        attribute={{
          id: "dataLinkId",
          name: "dataLinkId",
          type: "text",
          placeholder: "id de producto, colección o categorías",
        }}
        handleChange={handleChange}
      />

      <div className="btn btn-push " onClick={handleSubmit}>
        Pusheame
      </div>

      <div id="muestro-mensaje"></div>
    </div>
  );
};
