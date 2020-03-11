import { combineReducers } from "redux";
import signUpReducer from "./SignUpReducer";
import LogInReducer from "./LogInReducer";
const rootReducer = combineReducers({
  signUp: signUpReducer,
  logIn: LogInReducer
});
export default rootReducer;
