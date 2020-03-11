import {
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_ERROR
} from "../actions/Actiontypes";
import Axios from "axios";

export default function signUpUser(user) {
  // takes the user information from the signup component
  return dispatch => {
    Axios.post("https://pixsyassigment.herokuapp.com/signUp/", {
      // passing information from user to the req.body
      picture: user.picture,
      username: user.username,
      email: user.email,
      password: user.password,
      passwordRepeat: user.passwordRepeat,
      isSignUp: user.isSignUp,
      isError: user.isError
    })
      .then(res => {
        dispatch(signUpSuccess(res.data));
      })
      .catch(err => {
        dispatch(signUpFail(err));
      });
  };
}

// importing constants

const signUpSuccess = data => {
  return {
    type: FETCH_SIGNUP_SUCCESS,
    isSignUp: true
  };
};

const signUpFail = error => {
  return {
    type: FETCH_SIGNUP_ERROR,
    isSignUp: false,
    error: true
  };
};
