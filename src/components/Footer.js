import React, { Component } from "react";
import { Link } from "react-router-dom";
// import home from "../images/home.png";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <Link to="/" className="footer">
            <img className="homeButton" alt="home"></img>
          </Link>
        </footer>
      </div>
    );
  }
}
