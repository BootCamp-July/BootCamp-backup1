import React, { useState } from "react";
import "./progress-reacher.css";
import axios from "axios";

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

class ProgressBarExample2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: "started",
      percentage: 0,
    };

    this.exampleReqs = this.exampleReqs.bind(this);
  }

  exampleReqs() {
    axios.get("http://localhost:7000/items/" + id + "/", {}).then(
      (response) => {
        console.log(response.data.data.status);

        if (response.data.data.status === "started") {
          this.setState({ percentage: 0, progress: "has Started" });
        } else if (response.data.data.status === "inprog") {
          this.setState({ percentage: 50, progress: "is in progress" });
        } else if (response.data.data.status === "completed") {
          this.setState({ percentage: 100, progress: "is Done !" });
        }
      },
      (error) => {
        console.log(error);
      }
    );

    // var stat = 'complete'; ===> Used for testing
  }

  componentDidMount() {
    //Fetch the API request every 4 seconds
    console.log(this.exampleReqs());
    this.interval = setInterval(() => {
      this.exampleReqs(); //whatever function name that you've kept
    }, 4000);
  }

  render() {
    return (
      <div className="main-reacher-status">
        <br />
        <br />
        <center>
          <h2>Status of your job</h2>
          <br />
          <br />
        </center>
        <center>
          <ProgressBar percentage={this.state.percentage} />
          <br />
          <h3> Your job {this.state.progress}</h3>
        </center>
      </div>
    );
  }
}

export default ProgressBarExample2; // Exported here
