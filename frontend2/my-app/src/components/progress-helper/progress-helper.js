import React, { useState } from "react";
import "./progress-helper.css";
import axios from "axios";
import { Button } from "reactstrap";

// ID received from Rachita's code:
var id = localStorage.getItem("jobId");

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.percentage}%` }} />;
};

const ProgressBar = (props) => {
  const [] = useState(true); // what does this do?

  return (
    <div className="progress-bar">
      <Filler percentage={props.percentage} />
    </div>
  );
};

class ProgressBarExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0,
    };

    this.nextStep = this.nextStep.bind(this);
    this.finalStep = this.finalStep.bind(this);
    this.exampleReqs = this.exampleReqs.bind(this);
  }

  nextStep() {
    this.setState({ percentage: 50 });
    this.exampleReqs();
  }

  finalStep() {
    this.setState({ percentage: 100 });
    this.finalReqs();
    window.location.href = "/loggedin/";
  }

  exampleReqs() {
    axios
      .patch("http://localhost:7000/items/" + id + "/", {
        status: "inprog",
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  finalReqs() {
    axios
      .patch("http://localhost:7000/items/" + id + "/", {
        status: "completed",
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <div className="main-prog-helper">
        <br />
        <br />
        <center>
          {" "}
          <h2>What's the status of your assigned job ?</h2>
          <br />
        </center>
        <center>
          <ProgressBar percentage={this.state.percentage} />
        </center>

        <div style={{ marginTop: "20px" }}>
          <Button color="info" onClick={this.nextStep}>
            In Progress
          </Button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <Button color="danger" onClick={this.finalStep}>
            Complete
          </Button>
        </div>

        {/* <div
          style={{ marginTop: "10px", color: "blue", marginBottom: "15px" }}
          onClick={() => this.setState({ percentage: 0 })}
        >
          Reset
        </div>*/}
      </div>
    );
  }
}

export default ProgressBarExample; // Exported here

// Needs to send a PATCH for every click
// Axios stuff:

// axios.get("http://127.0.0.1:8000/api/users/").then((response) => {
//     for (var i = 0; i < response.data.length; i++) {
//       if (response.data[i].username === username) {
//         localStorage.setItem("id", response.data[i].id);
//         console.log(response.data[i].id, response.data[i].username);
//       }
//     }
//   });

// axios.patch("http://127.0.0.1:3000/api/users/", {
//   status: 'InProg'
// });
//
// axios.get("http://127.0.0.1:8000/api/users/").then((response) => {
//     console.log(response);
//   });
