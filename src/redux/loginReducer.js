import { LOGGED_IN, LOGIN_ERROR, Logout } from "./actionTypes";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: ""
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return { ...initialState, isLoggedIn: true, user: action.payload };

    case LOGIN_ERROR:
      return { ...initialState, error: action.payload };

    case Logout:
      return initialState;

    default:
      return state;
  }
};

export default loginReducer;
