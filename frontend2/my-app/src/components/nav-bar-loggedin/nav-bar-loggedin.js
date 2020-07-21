import React, { useState } from "react";
import { Navbar, NavbarBrand, Button } from "reactstrap";
import "./nav-bar-loggedin.css";
import { Link } from "react-router-dom";

const NavbarLoggedIn = (props) => {
  const [] = useState(true);

  return (
    <div>
      <Navbar className="bar" color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <h3 className="logo">Errands </h3>
        </NavbarBrand>
        <Link to="/">
          <Button className="logout-btn" color="danger">
            Logout
          </Button>
        </Link>
      </Navbar>
    </div>
  );
};

export default NavbarLoggedIn;
