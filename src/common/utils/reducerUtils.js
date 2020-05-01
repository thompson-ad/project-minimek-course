// lets you define separate reducer functions and a lookup table
export function createReducer(initialState, fnMap) {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];
    console.log(handler);
    return handler ? handler(state, payload) : state;
  };
}

export function reduceReducers(...reducers) {
  return (previous, current) =>
    reducers.reduce((p, r) => r(p, current), previous);
}
