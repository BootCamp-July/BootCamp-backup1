import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./nav-bar.css";

const Navbarr = (props) => {
  const [] = useState(true);

  return (
    <div>
      <Navbar className="bar" color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <h3 className="logo">Errands </h3>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Navbarr;
