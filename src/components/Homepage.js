import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import fetchPotterNews from "../store/potternews/actions";

class Homepage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPotterNews);
  }

  render() {
    return (
      <div>
        <h1 className="potter">Potter News!</h1>
        {this.props.potterNews
          ? this.props.potterNews.map(potterNew => {
              return (
                <div key={potterNew.id} className="column">
                  <h2>"{potterNew.title}"</h2>
                  <img src={potterNew.imgUrl} />
                  <p>"{potterNew.resume}"</p>
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
    potterNews: reduxState.potterNews
  };
}

export default connect(mapStateToProps)(Homepage);
