import React from "react";
import PropTypes from "prop-types";

export class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>
          Congratulations! You are a <strong>{this.props.quizResult}</strong>!
        </h2>
      </div>
    );
  }
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
