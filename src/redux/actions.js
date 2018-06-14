import config from "../config";
import { doFormBody } from "../utils";
import { LOGGED_IN, LOGIN_ERROR, LOGOUT } from "./actionTypes";

const logout = () => {
  return { type: LOGOUT };
};

const doLogin = ({ email, password }) => {
  const body = doFormBody({ email, password });
  console.log("Entrando a doLogin ", body, `${config.endPoint}/rest/login`);

  return dispatch => {
    const url = `${config.endPoint}/rest/login`;
    console.log(`url es ${url}`);
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      method: "POST",
      body
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) dispatch({ type: LOGIN_ERROR, payload: json.error });
        else dispatch({ type: LOGGED_IN, payload: json });
      })
      .catch(err => {
        // // console.log("error en conexión de red", err.message);
        dispatch({ type: LOGIN_ERROR, payload: err.message });
      });
  };
};

export { doLogin, logout };
