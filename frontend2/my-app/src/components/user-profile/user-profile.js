import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./user-profile.css";
import axios from "axios";
import { TabPane, Row, Col, Button } from "reactstrap";
import { Table } from "reactstrap";

function UserProfile() {
  const [users, setUsers] = useState([]);
  var username = localStorage.getItem("username");

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/users/")
      .then((res) => {
        console.log(res.data.length);
        console.log(res.data);

        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].username == username) {
            localStorage.setItem("location", res.data[i].location); //set updated user location
          }
        }

        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  var location = localStorage.getItem("location");
  var phone = localStorage.getItem("phonenumber");
  var username_modified = username.charAt(0).toUpperCase() + username.slice(1);
  var id = localStorage.getItem("id");

  console.log(
    localStorage.getItem("location"), //location check
    localStorage.getItem("username"), //username check
    localStorage.getItem("phonenumber"), //phonenumber check
    localStorage.getItem("id"), //id check
    localStorage.getItem("jobId"), //jobId check
    localStorage.getItem("helperJobId") //helperJobId check
  );
  return (
    <div>
      <Container>
        <center>
          <u>
            <h3>{username_modified}'s Profile</h3>
          </u>
          <br />
          <h3>Username: {username}</h3> <br />
          <h3>Unique Id: {id}</h3> <br />
          <h3>Phone: {phone}</h3> <br />
          <h3>Location: {location}</h3> <br />
        </center>
      </Container>
    </div>
  );
}

export default UserProfile;
