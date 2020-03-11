import React, { Component } from "react";
import { Link } from "react-router-dom";
import inicio from "../images/inicio.png";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <Link to="/" className="footer">
            <img className="homeButton" src={inicio} alt="home"></img>
          </Link>
        </footer>
      </div>
    );
  }
}
