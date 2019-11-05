import INIT_DATA from "./../../dummy-data.json";
const INIT_SLUG = "root";

const initState = {
  explorer: INIT_DATA,
  currentPath: INIT_SLUG
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default rootReducer;
