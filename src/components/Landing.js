import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { logOutAction } from "../store/actions/LogInActions";

class Landing extends Component {
  handleLogOut(e) {
    console.log("in handle logout");
    e.preventDefault();
    this.props.logOutAction();
    this.props.history.push("/");
    console.log("this.props.isLoggedIn", this.props.isLoggedIn);
  }

  render() {
    console.log(this.props.logIn);
    return (
      <div className="landingContent">
        <div className="">
          <h1 className="tittle">
            <span className="a">Log</span>
            <span className="b">Me</span>
            <span className="c">APP</span>
          </h1>
        </div>
        <div>
          <p className="p_landing">Log in and out or sign up!</p>

          {this.props.logIn.isLoggedIn ? (
            <div>
              <p className="helloName">
                Hello, hello, hello! {this.props.logIn.user.username}
                {this.props.logIn.user.email}
                {this.props.logIn.user.id}
              </p>
              <button className="logout" onClick={e => this.handleLogOut(e)}>
                Log Out
              </button>
            </div>
          ) : (
            <div className="container text-center">
              <Link to="/signUp" className="start">
                Sign Up!
              </Link>
              <Link to="/logIn" className="start">
                Log In!
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    logIn: state.logIn,
    error: state.error,
    message: state.message,
    user: state.user
  };
};

const mapdispatchToProps = dispatch => {
  return {
    logOutAction: () => {
      dispatch(logOutAction());
    }
  };
};
export default connect(mapStateToProps, mapdispatchToProps)(Landing);
