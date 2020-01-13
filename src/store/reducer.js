import { combineReducers } from "redux";
import loginReducer from "./login/reducer";
import signUpReducer from "./signup/reducer";

export default combineReducers({
  login: loginReducer,
  signup: signUpReducer
});
