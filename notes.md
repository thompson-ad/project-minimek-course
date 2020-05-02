# Application State

We want to be able to track Battlemech Pilots assigned to a combat unit, which specific Battlemech each Pilot is assigned to, and ultimately organize Battlemechs and their Pilots into groups called “Lances” and “Companies”.

Notice that we actually have two different slice reducers responding to the same action! Both our unitInfoReducer and our entitiesReducer are responding to the DATA_LOADED action. This is a key concept for Redux usage, which is often misunderstood or ignored. It doesn’t happen by accident, or completely automatically - the combineReducers function we’re using in our rootReducer is specifically calling both slice reducers, and giving them a chance to respond to that action by updating their own slice of data. We could implement the same behavior ourselves, but combineReducers does it for us. (We could also choose not to use combineReducers if we wanted to, and maybe handle things a different way if it made sense.)

Also notice that Redux-ORM automatically stored all the pilots in “normalized” form, by creating an items array for the Pilot type that stores a list of all item IDs, and an itemsById lookup table that stores the actual objects keyed by their IDs.
