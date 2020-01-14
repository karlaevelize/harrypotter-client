import React from "react";
import PropTypes from "prop-types";

export class AnswerOption extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="answerOption">
        <p>
          <input
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            checked={this.props.answerType === this.props.answer}
            id={this.props.answerType}
            value={this.props.answerType}
            disabled={this.props.answer}
            onChange={this.props.onAnswerSelected}
          />
        </p>
        <label className="radioCustomLabel" htmlFor={this.props.answerType}>
          {this.props.answerContent}
        </label>
      </div>
    );
  }
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
