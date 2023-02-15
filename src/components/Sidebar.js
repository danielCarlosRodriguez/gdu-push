import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { MdMobileScreenShare } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import avatar from "../../src/img/avatar.png";

export const Sidebar = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(localStorage.getItem("userGduPush"));
  }, []);

  const handleClick = (e) => {
    console.log("hice click en logout");
    localStorage.removeItem("userGduPush");
    localStorage.removeItem("tokenGduPush");
    window.location.replace("");
  };

  return (
    <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
      <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
        <h3 className="nombre-gdu ms-3 fw-bolder">GDU-Push</h3>
        {/* <span class="fs-5 ms-3 d-none d-sm-inline">
          GDU<span class="">-Push</span>
        </span> */}

        <ul
          className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item">
            <NavLink
              to="/"
              activeclassname="active"
              className="nav-link text-light"
            >
              <FaHome className="" />
              <span className="ms-1 d-none d-sm-inline ">Home</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/geant"
              activeclassname="active"
              className="nav-link text-light"
            >
              <MdMobileScreenShare className="" />
              <span className="ms-1 d-none d-sm-inline ">Géant</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/disco"
              activeclassname="active"
              className="nav-link text-light"
            >
              <MdMobileScreenShare className="" />
              <span className="ms-1 d-none d-sm-inline ">Disco</span>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/devoto"
              activeclassname="active"
              className="nav-link text-light"
            >
              <MdMobileScreenShare className="" />
              <span className="ms-1 d-none d-sm-inline ">Devoto</span>
            </NavLink>
          </li>
        </ul>

        <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
          <div
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              className="rounded-circle"
              src={avatar}
              alt="alt"
              style={{ width: "32px", height: "32px" }}
            />
          </div>

          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
            <li>
              <div className="dropdown-item">{user}</div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <div
                className="dropdown-item"
                onClick={handleClick}
                style={{ cursor: "pointer" }}
              >
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
