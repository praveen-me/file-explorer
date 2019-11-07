import INIT_DATA from "./../../dummy-data.json";
import {
  UPDATE_CURRENT_PATH,
  ADD_EXPLORER_ITEM,
  DELETE_EXPLORER_ITEM
} from "../types.js";
import { getDataByPath } from "../../utils/index.js";
const INIT_SLUG = "root";

const initState = {
  explorer: INIT_DATA,
  currentPath: INIT_SLUG
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_PATH: {
      const { payload } = action;

      if (payload.replacePath) {
        return {
          ...state,
          currentPath: payload.path
        };
      }

      let path = state.currentPath;

      if (payload.removeLastPathPart) {
        path = path
          .split("/")
          .slice(0, payload.croppedIndex + 1)
          .join("/");
      } else {
        path = `${path}/${payload.path}`;
      }

      return {
        ...state,
        currentPath: path
      };
    }

    case ADD_EXPLORER_ITEM: {
      const { payload } = action;
      const explorerCopy = JSON.parse(JSON.stringify(state.explorer));

      getDataByPath(explorerCopy, state.currentPath).children.push(payload);

      return {
        ...state,
        explorer: explorerCopy
      };
    }

    case DELETE_EXPLORER_ITEM: {
      const {
        payload: { type, identifier }
      } = action;
      const explorerCopy = JSON.parse(JSON.stringify(state.explorer));

      let data = getDataByPath(explorerCopy, state.currentPath);
      let itemIndex;

      if (type === "file") {
        itemIndex = data.children.findIndex(item => item.name === identifier);
      } else {
        itemIndex = data.children.findIndex(item => item.slug === identifier);
      }

      data.children.splice(itemIndex, 1);

      return {
        ...state,
        explorer: explorerCopy
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
