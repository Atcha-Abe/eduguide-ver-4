import { combineReducers } from "redux";
import { sidebar } from "./sidebar";
import { header } from "./header";

export const rootReducer = combineReducers({
  sidebar,
  header,
});
