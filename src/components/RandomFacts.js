import React, { Component } from "react";
import { connect } from "react-redux";
import fetchRandomFact from "../store/random-facts/actions";
import fetchRandomQuote from "../store/random-quotes/actions";

class RandomFact extends Component {
  componentDidMount() {
    this.props.dispatch(fetchRandomFact);
    this.props.dispatch(fetchRandomQuote);
  }

  render() {
    return (
      <div>
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
        <div>
          {this.props.randomQuote
            ? this.props.randomQuote.map(potterquote => {
                return (
                  <div key={potterquote.id} className="form">
                    <p style={{ textAlign: "left" }}>
                      <b>Potter quote of the day:</b>
                    </p>
                    <p>"{potterquote.quote}"</p>
                    <p style={{ textAlign: "right" }}>— {potterquote.author}</p>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    randomFact: reduxState.randomFact,
    randomQuote: reduxState.randomQuote
  };
}

export default connect(mapStateToProps)(RandomFact);
