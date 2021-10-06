import { combineReducers } from "redux";
import pageRouteReducer from "./pageRoute/pageRoute.reducer";

export default combineReducers({
  pageRoute: pageRouteReducer,
});
