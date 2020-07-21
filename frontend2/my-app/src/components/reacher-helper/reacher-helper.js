import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./reacher-helper.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ReacherHelper = (props) => {
  var username = localStorage.getItem("username");
  var username_modified = username.charAt(0).toUpperCase() + username.slice(1);

  axios.get("http://127.0.0.1:8000/api/users/").then((response) => {
    for (var i = 0; i < response.data.length; i++) {
      if (response.data[i].username === username) {
        localStorage.setItem("id", response.data[i].id);
        console.log(response.data[i].id, response.data[i].username);
      }
    }
  });

  var id = localStorage.getItem("id");

  return (
    <div id="main-div">
      <div className="text">
        So what do you feel like doing today <u>{username_modified}</u> ?
      </div>
      <Nav tabs className="nav">
        <NavItem className="nav-item-1">
          <Link to="/loggedin/reacher">
            <NavLink>Reacher</NavLink>
          </Link>
        </NavItem>
        <NavItem className="nav-item-2">
          <Link to="/loggedin/helper">
            <NavLink>Helper</NavLink>
          </Link>
        </NavItem>
      </Nav>
    </div>
  );
};

export default ReacherHelper;
