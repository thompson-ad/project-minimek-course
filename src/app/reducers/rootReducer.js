import { combineReducers } from "redux";
import tabsReducer from "features/tabs/tabsReducer";

const rootReducer = combineReducers({ tabs: tabsReducer });

console.log(rootReducer);
export default rootReducer;
