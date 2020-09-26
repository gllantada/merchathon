import { combineReducers } from "redux";
import user from "./user";
import orders from "./orders"
import common from "./common"


const rootReducer = combineReducers({
  user,
  orders,
  common
});

export default rootReducer;
