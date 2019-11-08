/* eslint-disable no-restricted-globals */
import INIT_DATA from "./../../dummy-data.json";
import {
  UPDATE_CURRENT_PATH,
  ADD_EXPLORER_ITEM,
  DELETE_EXPLORER_ITEM
} from "../types.js";
import { getDataByPath, INIT_SLUG } from "../../utils/index.js";

// Initial State
const initState = {
  explorer: INIT_DATA,
  currentPath: INIT_SLUG
};

/**
 * Root Reducer: Deals with change in state according to action
 *
 * @param {Object} state State of whole application
 * @param {Object} action Object required for changing state
 *
 * @returns {Object} New State
 */
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

      let isItemAlreadyPresent = false;

      let data = getDataByPath(explorerCopy, state.currentPath).children;

      let index = data.findIndex((item) => {
        let identifier = payload.type === "file" ? item.name : item.slug;
        let matchValue = payload.type === "file" ? payload.name : payload.slug;
        return identifier === matchValue;
      });

      if (index !== -1) {
        isItemAlreadyPresent = true;
      }

      if (isItemAlreadyPresent) {
        console.log("File/Folder already present");
      }

      if (!isItemAlreadyPresent) {
        data.push(payload);
      }

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
        itemIndex = data.children.findIndex((item) => item.name === identifier);
      } else {
        itemIndex = data.children.findIndex((item) => item.slug === identifier);
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
