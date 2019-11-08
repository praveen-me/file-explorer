import { ADD_EXPLORER_ITEM, DELETE_EXPLORER_ITEM } from "../types";

export const addExplorerItem = (data) => ({
  type: ADD_EXPLORER_ITEM,
  payload: {
    ...data
  }
});

export const deleteExplorerItem = (data) => ({
  type: DELETE_EXPLORER_ITEM,
  payload: {
    ...data
  }
});
