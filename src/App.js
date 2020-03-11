import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import "./App.css";
import { loginSuccess } from "./store/actions/LogInActions";
import { connect } from "react-redux";

class App extends Component {
  checkIfUserIsLoggedIn() {
    const token = localStorage.getItem("token");
    if (token !== null) {
      this.props.loginSuccess(token);
      // } else if (window.location.replace("/")) {
    }
  }
  componentDidMount() {
    this.checkIfUserIsLoggedIn();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/LogIn" component={LogIn} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => ({
  loginSuccess: token => dispatch(loginSuccess(token))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
