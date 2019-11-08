/* eslint-disable no-restricted-globals */
import INIT_DATA from "./../../dummy-data.json";
import {
  UPDATE_CURRENT_PATH,
  ADD_EXPLORER_ITEM,
  DELETE_EXPLORER_ITEM,
  HANDLE_DUPLICATE_DATA
} from "../types.js";
import { getDataByPath, INIT_SLUG } from "../../utils/index.js";

let itemData = null;

const initDuplicateItemState = {
  name: "",
  isAlreadyExistsInExplorer: false
};

// Initial State
const initState = {
  explorer: INIT_DATA,
  currentPath: INIT_SLUG,
  duplicatedItemData: {
    ...initDuplicateItemState
  }
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

      let existedItem = state.duplicatedItemData;

      let data = getDataByPath(explorerCopy, state.currentPath).children;

      let index = data.findIndex((item) => {
        let identifier = payload.type === "file" ? item.name : item.slug;
        let matchValue = payload.type === "file" ? payload.name : payload.slug;
        return identifier === matchValue;
      });

      if (index !== -1) {
        existedItem.isAlreadyExistsInExplorer = true;
      }

      if (existedItem.isAlreadyExistsInExplorer) {
        itemData = payload;

        return {
          ...state,
          duplicatedItemData: {
            name: payload.name,
            isAlreadyExistsInExplorer: existedItem.isAlreadyExistsInExplorer
          }
        };
      }

      if (!existedItem.isAlreadyExistsInExplorer) {
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

    case HANDLE_DUPLICATE_DATA: {
      const { payload } = action;
      const explorerCopy = JSON.parse(JSON.stringify(state.explorer));

      if (payload.shouldExistedDataReplace) {
        let data = getDataByPath(explorerCopy, state.currentPath).children;

        let index = data.findIndex((item) => {
          let identifier = itemData.type === "file" ? item.name : item.slug;
          let matchValue =
            itemData.type === "file" ? itemData.name : itemData.slug;
          return identifier === matchValue;
        });

        data.splice(index, 1, itemData);
      }

      itemData = null;

      return {
        ...state,
        explorer: explorerCopy,
        duplicatedItemData: {
          ...initDuplicateItemState
        }
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
