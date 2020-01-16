import React, { Component } from "react";
import { connect } from "react-redux";

class RealHomepage extends Component {
  render() {
    return (
      <div className="homepage">
        <h1 style={{ fontSize: "500%" }}>Daily Potter ϟ</h1>
        <p>A place for potterheads</p>
      </div>
    );
  }
}

export default RealHomepage;
