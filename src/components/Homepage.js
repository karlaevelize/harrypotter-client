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
          ? this.props.potterNews.map(potternew => {
              return (
                <div key={potternew.id} className="column">
                  <Link className="links" to={`/potternew/${potternew.id}`}>
                    <h2>"{potternew.title}"</h2>
                    <img className="image1" src={potternew.imgUrl} />
                    <p>"{potternew.resume}"</p>
                  </Link>
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
