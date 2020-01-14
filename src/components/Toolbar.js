import React, { Component } from "react";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li style={{ float: "right" }}>
            <Link className="a" to="/login">
              Login
            </Link>
          </li>
          <li style={{ float: "right" }}>
            <Link className="a" to="/signup">
              Sign Up
            </Link>
          </li>
          <li style={{ float: "right" }}>
            <Link className="a" to="/chat">
              Chat
            </Link>
          </li>
          <li>
            <Link className="a" to="/quiz">
              Sorting Hat
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Toolbar;
