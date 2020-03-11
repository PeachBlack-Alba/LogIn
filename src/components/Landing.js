import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { logOutAction } from "../store/actions/LogInActions";
import inicio from "../images/inicio.png";

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
        {this.props.logIn.isLoggedIn ? (
          <div>
            <div className="FormCenter">
              <p>Hello, hello, hello! This is your data:</p>
              <div>
                <dl className="data">
                  <dt>User Name:</dt>
                  <dd>{this.props.logIn.user.username}</dd>
                  <dt>User Email: </dt>
                  <dd>{this.props.logIn.user.email} </dd>
                  <dt>User Id: </dt>
                  <dd>value={this.props.logIn.user.id}</dd>
                </dl>
              </div>
            </div>
            <button className="salir" onClick={e => this.handleLogOut(e)}>
              Log Out
            </button>
          </div>
        ) : (
          <div>
            <div className="">
              <h1 className="tittle">
                <span className="a">Log</span>
                <span className="b">Me</span>
                <span className="c">APP</span>
              </h1>
            </div>
            <div>
              <p className="p_landing">Log in and out or sign up!</p>
              <div className="container text-center">
                <Link to="/signUp" className="start">
                  Sign Up!
                </Link>
                <Link to="/logIn" className="start">
                  Log In!
                </Link>
              </div>
            </div>
          </div>
        )}
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
