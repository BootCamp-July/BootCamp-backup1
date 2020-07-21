import React from "react";
import "./main-view.css";
import LoginComponent from "../login-component/login-component";
//import SlideShowComponent from "../slide-show/slide-show";
import Carousel from "../carousel/carousel";
import "./main-view.css";
import { Row, Col } from "reactstrap";

function MainView() {
  return (
    <div className="MainView">
      <Row>
        <Col>
          <Carousel />
        </Col>
        <Col>
          <LoginComponent className="login-component" />
        </Col>
      </Row>
      <br />
    </div>
  );
}

export default MainView;
