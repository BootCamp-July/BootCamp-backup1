import React, { useState, setState, Component } from "react";
import { Container } from "reactstrap";
import "./reacher-component.css";
import axios from "axios";
import { TabPane, Button, Row, Col } from "reactstrap";
import { Table } from "reactstrap";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

class ReacherComponent extends Component {
  get() {
    axios.get("http://127.0.0.1:8000/api/users/").then((response) => {
      console.log(response.data[0]);
    });
  }

  //fetch code
  state = {
    joke: "",
  };

  serviceState = {
    serviceDetails: {
      itemdesc: "",
      reacher_id: localStorage.getItem("id"),
      status: "matching",
      helper_id: "0",
    },
  };

  postService = (event) => {
    console.log(this.serviceState.serviceDetails);
    const ValidateService = this.serviceState.serviceDetails;
    const Itemdesc = ValidateService.itemdesc;

    if (Itemdesc === "") {
      alert("Please specify a job");
    } else {
      window.location.href = "/loggedin/matching";
    }

    fetch("http://127.0.0.1:8000/api/jobs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.serviceState.serviceDetails),
    })
      .then((data) => data.json())
      .catch((error) => console.error(error));
  };

  //service event
  inputChanged = (event) => {
    const cred = this.serviceState.serviceDetails;
    cred[event.target.name] = event.target.value;
    this.setState({ serviceDetails: cred });
  };

  render() {
    return (
      <div className="main-div-reacher">
        <Container>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>What service do you require?</h4>
              </Col>
            </Row>
            <Row>
              <Col sm="3"></Col>
              <Col sm="6">
                <Table>
                  <thead>
                    <tr>
                      <th>Enter Job Description</th>
                      {/*<th>Enter Current Location</th>*/}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Form>
                          <FormGroup>
                            <Label for="jobDescription"></Label>
                            <Input
                              className="jobdesc-input"
                              type="text"
                              name="itemdesc"
                              id="itemdesc"
                              placeholder="Please specify the type of service you require!"
                              value={this.serviceState.serviceDetails.itemdesc}
                              onChange={this.inputChanged}
                            />
                          </FormGroup>
                        </Form>
                      </td>
                      {/*
                      <td>
                        <Form>
                          <FormGroup>
                            <Label for="Location"></Label>
                            <Input
                              type="text"
                              name="location"
                              id="location"
                              placeholder="Where are you currently?"
                            />
                          </FormGroup>
                        </Form>
                      </td>*/}
                    </tr>
                  </tbody>
                </Table>

                <Button onClick={this.postService}>Find Helpers!</Button>
              </Col>
              <Col sm="3"></Col>
            </Row>
          </TabPane>
        </Container>
        <p>{this.state.joke}</p>
      </div>
    );
  }
}

export default ReacherComponent;
