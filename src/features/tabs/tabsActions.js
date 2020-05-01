import { TAB_SELECTED } from "./tabsConstants.js";

// action creator
export function selectTab(tabName) {
  return {
    type: TAB_SELECTED,
    payload: { tabName },
  };
}
