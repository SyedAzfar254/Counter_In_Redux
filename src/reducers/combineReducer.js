import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  // In place of counter & isLogged you can write any name of your choice
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;