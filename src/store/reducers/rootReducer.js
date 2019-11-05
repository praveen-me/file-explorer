import INIT_DATA from "./../../dummy-data.json";
import { UPDATE_CURRENT_PATH } from "../types.js";
const INIT_SLUG = "root";

const initState = {
  explorer: INIT_DATA,
  currentPath: INIT_SLUG
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PATH: {
      const { payload } = action;

      return {
        ...state,
        currentPath: `${state.currentPath}/${payload.newPathPart}`
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
