import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";

export const Login = ({ children }) => {
  useEffect(() => {
    return () => {
      document.body.style.backgroundImage =
        "linear-gradient(to right, #7531fa, #b23aff)";
    };
  }, []);

  return (
    <div className="fondo-login">
      <Container className="text-center">
        <Row className="d-flex justify-content-center text-white text-center mx-auto mt-5 fs-3">
          <strong>GDU-Push</strong>
        </Row>

        <Row className="mt-2">{children}</Row>
      </Container>
    </div>
  );
};
