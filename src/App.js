import "./App.css";
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import OnePotterNew from "./components/OnePotterNew";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import ChatPage from "./components/ChatPage";
import QuizPage from "./components/QuizPage";
import RandomFacts from "./components/RandomFacts";
import RealHomepage from "./components/RealHomepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route exact path="/" component={RealHomepage} />
          <Route exact path="/potternew" component={Homepage} />
          <Route path="/potternew/:id" component={OnePotterNew} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/chat" component={ChatPage} />
          <Route path="/quiz" component={QuizPage} />
          <Route path="/random" component={RandomFacts} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default connect()(App);
