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
      let path = state.currentPath;

      if (payload.removeLastPathPart) {
        path = path
          .split("/")
          .slice(0, payload.croppedIndex + 1)
          .join("/");
      } else {
        path = `${path}/${payload.newPathPart}`;
      }

      return {
        ...state,
        currentPath: path
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
