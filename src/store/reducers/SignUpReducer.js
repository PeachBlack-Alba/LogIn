import {
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_ERROR
} from "../actions/Actiontypes";

const initialState = {
  picture: "",
  username: "",
  email: "",
  password: "",
  passwordRepeat: "",
  isSignUp: false,
  isError: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignUp: true,
        signUp: action.payload
      };
    case FETCH_SIGNUP_ERROR:
      return {
        ...state,
        isSignUp: false,
        isError: true
      };
    default:
      // the dispatched action is not in this reducer, return the state unchanged

      return state;
  }
};
