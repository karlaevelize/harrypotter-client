import React, { Component } from "react";
import createComment from "../store/comment/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CreateComment extends Component {
  state = {
    author: "",
    comment: "",
    potternewId: this.props.onePotterNew.id
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    const { author, comment, potternewId } = this.state;
    const action = createComment(author, comment, potternewId);
    this.props.dispatch(action);
    this.setState({
      author: "",
      comment: "",
      potternewId: this.props.onePotterNew.id
    });
  };
  render() {
    if (this.props.jwt === null) {
      return (
        <p className="form" style={{ marginBottom: "2cm" }}>
          Please, <Link to="/login">login</Link> to leave a Comment
        </p>
      );
    }
    console.log("HELLO", this.props.onePotterNew.id);

    return (
      <div style={{ marginBottom: "2cm" }} className="form">
        <h3>Leave a comment:</h3>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              name="author"
              type="text"
              value={this.state.author}
              onChange={this.handleChange}
              placeholder="name"
            />
            <input
              name="comment"
              type="text"
              value={this.state.comment}
              onChange={this.handleChange}
              placeholder="comment"
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    jwt: reduxState.login.jwt,
    onePotterNew: reduxState.onePotterNew
  };
};

export default connect(mapStateToProps)(CreateComment);
