import { FETCH_LOGIN_SUCCESS } from "../actions/Actiontypes";
import { FETCH_LOGIN_ERROR } from "../actions/Actiontypes";
import { FETCH_LOGOUT_SUCCESS } from "../actions/Actiontypes";

const initialState = {
  isLoggedIn: false,
  isError: false,
  user: null,
  message: ""
};
export default (state = initialState, action) => {
  // switch is like (if/else) and then we code all the scenarios
  switch (action.type) {
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isError: false,
        user: action.user
        //message: action.message
      };
    case FETCH_LOGIN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        isError: true,
        user: null
        //message: action.message
      };
    case FETCH_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        isError: null,
        user: null
      };
    default:
      return state;
  }
};
