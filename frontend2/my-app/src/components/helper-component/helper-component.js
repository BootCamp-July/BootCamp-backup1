import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./helper-component.css";
import axios from "axios";
import { TabPane, Row, Col, Button } from "reactstrap";
import { Table } from "reactstrap";
// import { Form, FormGroup, Label, Input } from "reactstrap";
// import { Link } from "react-router-dom";
function HelperComponent() {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //setItems({loading:true});
    axios
      .all([
        axios.get("http://localhost:7000/items"),
        axios.get("http://localhost:7000/api/users"),
      ])
      .then((res) => {
        console.log(res[0].data.length);
        for (var i = 0; i < res[0].data.length; i++) {
          if (res[0].data[i].status !== "matching") {
            delete res[0].data[i];
            delete res[1].data[i];
          }
        }
        setItems(res[0].data);
        setUsers(res[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const buttonClick = (item) => {
    //console.log(item)
    axios
      .patch("http://localhost:7000/items/" + item + "/", {
        status: "started",
        helper_id: localStorage.getItem("id"), //assign helper_id
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.href = "/helperProgress/";
  };
  return (
    <div className="main-div-helper">
      <Container>
        <TabPane tabId="2">
          <Row>
            <Col sm="3"></Col>
            <Col sm="6">
              <h4>Reachers you can help now!</h4>
              <Table>
                <thead>
                  <tr>
                    {/*<th>Location of Reachers</th>*/}
                    <th>Job Description</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {/*<td className="td-1">
                      {users.map((user) => (
                        <li key={user.id}>{user.location}</li>
                      ))} 
                    </td>*/}
                    <td className="td-2">
                      {items.map((item) => (
                        <li key={item.id}>{item.itemdesc}</li>
                      ))}
                    </td>
                    <td className="td-3">
                      {items.map((item) => (
                        <li key={item.id}>
                          <input
                            id={item.id}
                            type="checkbox"
                            value={item.id}
                            onClick={() => buttonClick(item.id)}
                          ></input>
                        </li>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col sm="3"></Col>
          </Row>
        </TabPane>
      </Container>
    </div>
  );
}
export default HelperComponent;
