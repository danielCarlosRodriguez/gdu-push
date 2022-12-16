import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";


export const Login = () => {
  useEffect(() => {
    return () => {
      document.body.style.backgroundImage =
        "linear-gradient(to right, #7531fa, #b23aff)";
    };
  }, []);

  return (
    <div className="home">
      <Container className="mt-5">
        <Row>
          <Col className="d-flex justify-content-end">
            <div className="bg-light p-4 rounded columna-form">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div>
                  <div className="form-text mb-3">
                    ¿Olvidaste tu contraseña?
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  formaction="/plataforma.html"
                >
                  Submit
                </button>
              </form>
            </div>
          </Col>

          <Col>
            <div className="col-6">
              <div className="fs-0">GDU-Push</div>
              <p className="fs-5 text-white">
                Plataforma de notificaciones app personalizadas
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
