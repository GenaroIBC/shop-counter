import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { crudReducer } from "./crudReducer";

const reducer = combineReducers({ counterReducer, crudReducer });

export default reducer;
