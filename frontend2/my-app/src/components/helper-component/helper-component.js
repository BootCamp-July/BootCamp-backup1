import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import "./helper-component.css";
import axios from "axios";
import { TabPane, Row, Col, Button } from "reactstrap";
import { Table } from "reactstrap";

function HelperComponent() {
  const [items, setItems] = useState([]);
  //const [users,setUsers] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:7000/match")
      .then((res) => {
        console.log("response.data.data", res);
        console.log(res.data.length);
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].status !== "matching") {
            delete res.data[i];
          }
        }
        setItems(res.data);
        //setUsers(res[1].data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const buttonClick = (item) => {
    //console.log(item)
    localStorage.setItem("helperJobId", item); //set helper's job id

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
            <Col sm="2"></Col>
            <Col sm="8">
              <h4>Reachers you can help now!</h4>
              <Table>
                <thead>
                  <tr>
                    <th>Location of Reachers</th>
                    <th>Job Description</th>
                    <th>Service Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td-1">
                      {items.map((item) => (
                        <li key={item.id}>{item.location}</li>
                      ))}
                    </td>
                    <td className="td-2">
                      {items.map((item) => (
                        <li key={item.id}>{item.itemdesc}</li>
                      ))}
                    </td>
                    <td className="td-3">
                      {items.map((item) => (
                        <li key={item.id}>{item.price}</li>
                      ))}
                    </td>
                    <td className="td-4">
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
            <Col sm="2"></Col>
          </Row>
        </TabPane>
      </Container>
    </div>
  );
}
export default HelperComponent;
