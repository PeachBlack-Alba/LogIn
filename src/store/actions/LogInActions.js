import {
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_ERROR,
  FETCH_LOGOUT_SUCCESS
} from "./Actiontypes";
import Axios from "axios";

const jwt_decode = require("jwt-decode");

export function loginAction(email, password) {
  //takes email and password from the state of login
  return dispatch => {
    console.log(password);
    Axios.post("https://pixsyassigment.herokuapp.com/logIn", {
      // Axios.post("http://localhost:5000/logIn/", {
      //passes information in the req.body
      email: email,
      password: password
    })
      .then(data => {
        // we get the token back from the back end (is the "res" from the login route)
        console.log("data", data);

        localStorage.setItem("token", data.data.token); //setting the token in the local store
        dispatch(loginSuccess(data.data.token));
      })
      .catch(err => {
        console.log(err.response);
        dispatch(loginError(err.response));
      });
  };
}

// Exporting constants

export function loginSuccess(token) {
  console.log("in login success");
  const decoded = jwt_decode(token); // takes the payload information and decodes it so we can see the information
  return {
    type: "FETCH_LOGIN_SUCCESS",
    success: true,
    isLoggedIn: true,
    isError: false,
    user: decoded
  };
}

export function loginError(data) {
  return {
    type: "FETCH_LOGIN_ERROR",
    isLoggedIn: false,
    isError: true,
    user: null
  };
}

export function logOut(data) {
  return {
    type: "FETCH_LOGOUT_SUCCESS"
  };
}
export function logOutAction() {
  localStorage.clear();
  return dispatch => {
    dispatch(logOut());
  };
}
