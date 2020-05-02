import { combineReducers } from "redux";
import entitiesReducer from "./entitiesReducer";
import tabsReducer from "features/tabs/tabsReducer";
import unitInfoReducer from "features/unitInfo/unitInfoReducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  unitInfo: unitInfoReducer,
  tabs: tabsReducer,
});

console.log(rootReducer);
export default rootReducer;
