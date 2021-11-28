import { combineReducers } from "redux";
import { sidebar } from "./sidebar";
import { header } from "./header";
import { icon } from "./icon";

export const rootReducer = combineReducers({
  sidebar,
  header,
  icon,
});
