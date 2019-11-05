import INIT_DATA from "./../../dummy-data.json";

const initState = INIT_DATA;

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
