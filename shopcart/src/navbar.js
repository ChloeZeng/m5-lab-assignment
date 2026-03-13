import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo 1.svg";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(props) {
  return (
    <div className="custom-navbar">
      <div className="container-fluid d-flex justify-content-between align-items-center h-100 px-5">
        <Link to="/" className="navbar-logo-link">
          <div className="d-flex align-items-center">
            <span className="navbar-title-text">Shop 2</span>

            <img src={logo} alt="React Logo" className="navbar-react-logo" />

            <span className="navbar-title-text">React</span>
          </div>
        </Link>

        <Link to="/cart" className="navbar-cart-link">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="ms-2">{props.totalItems} items</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;