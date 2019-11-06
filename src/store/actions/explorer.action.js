import { ADD_EXPLORER_ITEM } from "../types";

export const addExplorerItem = data => ({
  type: ADD_EXPLORER_ITEM,
  payload: {
    ...data
  }
});
