import React, { Component } from "react";
import { connect } from "react-redux";
import fetchOnePotterNew from "../store/onepotternew/actions";
import CommentForm from "./CommentForm";

class OnePotterNew extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(fetchOnePotterNew(id));
  }

  render() {
    return (
      <div>
        <div className="onenew">
          {this.props.onePotterNew ? (
            <div>
              <h1>{this.props.onePotterNew.title}</h1>
              <img className="image2" src={this.props.onePotterNew.imgUrl} />
              <p>{this.props.onePotterNew.article}</p>
            </div>
          ) : (
            "Loading..."
          )}
        </div>
        <h1 style={{ color: "wheat" }}>Comments</h1>

        <div className="comment">
          {this.props.onePotterNew.comments
            ? this.props.onePotterNew.comments.map(comment => {
                return (
                  <div key={comment.id}>
                    <p>
                      <b>{comment.author} says: </b>
                      {comment.comment}
                    </p>
                  </div>
                );
              })
            : "Loading..."}
        </div>
        <CommentForm />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    onePotterNew: reduxState.onePotterNew
  };
}

export default connect(mapStateToProps)(OnePotterNew);
