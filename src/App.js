import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Toolbar from "./components/Toolbar";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ChatPage from "./components/ChatPage";
import QuizPage from "./components/QuizPage";
import RandomFacts from "./components/RandomFacts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/chat" component={ChatPage} />
          <Route path="/quiz" component={QuizPage} />
          <Route path="/random" component={RandomFacts} />
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
