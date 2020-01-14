import React from "react";
import PropTypes from "prop-types";

export class Question extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2 className="question">{this.props.content}</h2>;
  }
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
