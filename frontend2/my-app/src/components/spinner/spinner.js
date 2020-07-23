import React, { Component } from "react";
import { Spinner, Button } from "reactstrap";
import "./spinner.css";
import { Link } from "react-router-dom";
import axios from "axios";
class Spinnerr extends Component {
  state = {
    joke: "",
  };

  setJobId() {
    axios.get("http://127.0.0.1:8000/api/jobs/").then((response) => {
      localStorage.setItem("jobId", response.data[response.data.length - 1].id);
    });
  }

  fetchHelpers() {
    axios.get("http://127.0.0.1:8000/api/jobs/").then((response) => {
      console.log(
        response.data[localStorage.getItem("jobId") - 1].id,
        response.data[localStorage.getItem("jobId") - 1].status
      );
      //localStorage.setItem("jobId", response.data[response.data.length - 1].id);
      this.setState({
        joke: response.data[localStorage.getItem("jobId") - 1].status,
      });

      if (
        response.data[localStorage.getItem("jobId") - 1].status == "started"
      ) {
        window.location.href = "/reacherProgress"; //locate user to the job status
      }
    });
  }

  componentDidMount() {
    this.setJobId(); //set the jobId
    //Fetch the API request every 4 seconds
    console.log(this.fetchHelpers());
    this.interval = setInterval(() => {
      this.fetchHelpers();
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="loading">
        <Spinner color="primary" />

        <br />
        <br />
        <h3>Looking for Helpers..</h3>
        <p>{this.state.joke}</p>
        <br />
        <Link to="/loggedin/reacher">
          <Button color="danger">Stop</Button>
        </Link>
      </div>
    );
  }
}

export default Spinnerr;
