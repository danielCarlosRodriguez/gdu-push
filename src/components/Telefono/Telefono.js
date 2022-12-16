import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import telefono from "../../img/s20.png";
import logoGeant from "../../img/logos-geant-push.png";

export const Telefono = ({logo= logoGeant}) => {
      const [titulo, setTítulo] = useState("Acá va el Título 😎");
      const [cuerpo, setCuerpo] = useState("¡Acá va el cuerpo del mensaje! 🚀");

      const inputChangeHandlerTexto = (ev) => {
        setTítulo(ev.target.value);
      };

      const inputChangeHandlerCuerpo = (ev) => {
        setCuerpo(ev.target.value);
    };
    
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col className="col-12 col-md-6">
            <form className="ms-2 mt-5">
              <div className="mb-3">
                <label className="form-label">Título</label>
                <input
                  onChange={inputChangeHandlerTexto}
                  value={titulo}
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Cuerpo</label>
                <textarea
                  name="cuerpo"
                  className="form-control"
                  onChange={inputChangeHandlerCuerpo}
                  value={cuerpo}
                ></textarea>
              </div>

              <div className="btn btn-push">Pusheame</div>
            </form>
          </Col>
          <Col className="col-12 col-md-6 contenedor-telefono">
            <img src={telefono} alt="telefono" />
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};
