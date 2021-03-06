import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbarr from "./components/nav-bar/nav-bar";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import MainView from "./components/main-view/main-view";
import NavbarLoggedIn from "./components/nav-bar-loggedin/nav-bar-loggedin";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReacherHelper from "./components/reacher-helper/reacher-helper";
import ReacherComponent from "./components/reacher-component/reacher-component";
import HelperComponent from "./components/helper-component/helper-component";
import Spinnerr from "./components/spinner/spinner";
import BottomComponent from "./components/bottom-component/bottom-component";
import ReacherProgress from "./components/status-reacher/status-reacher";
import ProgressBarExample from "./components/progress-helper/progress-helper";
import ProgressBarExample2 from "./components/progress-reacher/progress-reacher";
//import Temp from "./components/temp/temp";
ReactDOM.render(
  <Router>
    <div>
      <Route path="/" exact component={Navbarr} />
      <Route path="/" exact component={MainView} />
      <Route path="/" exact component={BottomComponent} />
      <Route path="/loggedin" component={NavbarLoggedIn} />
      <Route path="/loggedin" component={ReacherHelper} />
      <Route path="/loggedin/reacher" component={ReacherComponent} />
      <Route path="/loggedin/helper" component={HelperComponent} />
      <Route path="/loggedin/matching" component={Spinnerr} />
      <Route path="/reacherProgress" component={NavbarLoggedIn} />
      <Route path="/reacherProgress" component={ProgressBarExample2} />
      <Route path="/helperProgress" component={NavbarLoggedIn} />
      <Route path="/helperProgress" component={ProgressBarExample} />
    </div>
  </Router>,
  document.getElementById("root")
);

//ReactDOM.render(<MainView />, document.getElementById("main-view"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
