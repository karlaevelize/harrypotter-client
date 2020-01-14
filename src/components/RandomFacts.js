import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import fetchRandomFact from "../store/random-facts/actions";

class RandomFact extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRandomFact);
  }

  render() {
    return (
      <div>
        {this.props.randomFact
          ? this.props.randomFact.map(potterfact => {
              return (
                <div key={potterfact.id} className="form">
                  <p style={{ textAlign: "left" }}>
                    <b>Potter fact of the day:</b>
                  </p>
                  <p>"{potterfact.fact}"</p>
                </div>
              );
            })
          : "Loading..."}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    randomFact: reduxState.randomFact
  };
}

export default connect(mapStateToProps)(RandomFact);
