import config from "../config";
import { doFormBody } from "../utils";
import { LOGGED_IN, LOGIN_ERROR, LOGOUT } from "./actionTypes";

const logout = () => {
  return { type: LOGOUT };
};

const doLoginUrlEncoded = ({ email, password }) => {
  const body = doFormBody({ email, password });

  return dispatch => {
    const url = `${config.endPoint}/rest/login`;
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
        dispatch({ type: LOGIN_ERROR, payload: err.message });
      });
  };
};

const doLogin = ({ email, password }) => {
  const body = JSON.stringify({ email, password });

  return dispatch => {
    const url = `${config.endPoint}/api/login`;
    console.log(`conectando a ${url} con body ${body}`);
    fetch(url, {
      method: "POST",
      body
    })
      .then(response => response.json())
      .then(json => {
        if (json.error) dispatch({ type: LOGIN_ERROR, payload: json.error });
        else dispatch({ type: LOGGED_IN, payload: json });
      })
      .catch(err => {
        dispatch({ type: LOGIN_ERROR, payload: err.message });
      });
  };
};

export { doLogin, logout, doLoginUrlEncoded };
