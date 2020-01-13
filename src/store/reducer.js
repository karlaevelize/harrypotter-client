import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import signUpReducer from "./signup/reducer";
import chatReducer from "./chat/reducer";

export default combineReducers({
  login: loginReducer,
  signup: signUpReducer,
  chat: chatReducer
});
