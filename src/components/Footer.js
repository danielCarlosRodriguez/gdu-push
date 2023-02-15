import React from 'react'
import { Cart4 } from "react-bootstrap-icons";

export const Footer = () => {
    return (
      <>
        {" "}
        <footer className="row bg-light py-4 mt-auto text-end">
          <div className="col">
            <Cart4 className="me-2" />
            e-commerce GDU | 2023
          </div>
        </footer>
      </>
    );
}
