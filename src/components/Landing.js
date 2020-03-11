import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

class Landing extends Component {
  render() {
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
            <p className="helloName">
              Hello, hello, hello! {this.props.logIn.user.username}
            </p>
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
export default connect(mapStateToProps)(Landing);
