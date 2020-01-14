import React from "react";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import AnswerOption from "./AnswerOption";
import PropTypes from "prop-types";

export class Quiz extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={this.props.answer}
        questionId={this.props.questionId}
        onAnswerSelected={this.props.onAnswerSelected}
      />
    );
  }

  render() {
    return (
      <div key={this.props.questionId}>
        <QuestionCount
          counter={this.props.questionId}
          total={this.props.questionTotal}
        />
        <Question content={this.props.question} />
        <div className="answerOptions">
          {this.props.answerOptions.map(this.renderAnswerOptions.bind(this))}
        </div>
      </div>
    );
  }
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
