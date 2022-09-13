import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";

const reducer = combineReducers({ counterReducer });

export default reducer;
