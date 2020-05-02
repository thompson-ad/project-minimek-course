import { createReducer } from "../../common/utils/reducerUtils";
import { TAB_SELECTED } from "./tabsConstants";

const initialState = {
  currentTab: "unitInfo",
};

export function selectTab(state, payload) {
  return {
    currentTab: payload.tabName,
  };
}

// can be renamed on export
// we define our reducers as lookup tables of functions to handle each action type
// helps simplify immutable update logic by writing "mutativ code" inside your reducers
// 2 args: first is the initial state, 2nd is an object mapping from action TYPES to to case reducers
// each of the case reducers handles one specific action type
export default createReducer(initialState, {
  [TAB_SELECTED]: selectTab,
});
