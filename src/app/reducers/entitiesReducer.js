import { createReducer } from "common/utils/reducerUtils";

import orm from "app/orm";

import { DATA_LOADED } from "features/tools/toolConstants";

const initialState = orm.getEmptyState();

export function loadData(state, payload) {
  // create a redux-orm session from our entities "database tables" object
  const session = orm.session(state);
  // Get a reference to the correct version of model classes for this session
  const { Pilot, MechDesign, Mech } = session;
  const { pilots, designs, mechs } = payload;

  // insert the pilot entries into the session
  pilots.forEach((pilot) => Pilot.parse(pilot));
  designs.forEach((design) => MechDesign.parse(design));
  mechs.forEach((mech) => Mech.parse(Mech));

  // return a new version of the entities state object with the inserted entries
  return session.state;
}

export default createReducer(initialState, { [DATA_LOADED]: loadData });
