import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import LoginReducer from "./loginReducer";
import ItemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
  LoginReducer,
  ItemsReducer
});
export default createStore(rootReducer, applyMiddleware(reduxThunk));
