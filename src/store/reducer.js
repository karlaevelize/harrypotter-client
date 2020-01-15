import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import signUpReducer from "./signup/reducer";
import chatReducer from "./chat/reducer";
import randomFactReducer from "./random-facts/reducer";
import randomQuoteReducer from "./random-quotes/reducer";
import potterNewsReducer from "./potternews/reducer";
import onePotterNewReducer from "./onepotternew/reducer";

export default combineReducers({
  login: loginReducer,
  signup: signUpReducer,
  chat: chatReducer,
  randomFact: randomFactReducer,
  randomQuote: randomQuoteReducer,
  potterNews: potterNewsReducer,
  onePotterNew: onePotterNewReducer
});
