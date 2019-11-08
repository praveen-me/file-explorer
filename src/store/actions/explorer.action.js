import { ADD_EXPLORER_ITEM, DELETE_EXPLORER_ITEM } from "../types";

/**
 * Adds a new item in explorer
 *
 * @param {Object} data Data for creating item in file explorer
 *
 * @returns {Object} A new action object
 */
export const addExplorerItem = (data) => ({
  type: ADD_EXPLORER_ITEM,
  payload: {
    ...data
  }
});

/**
 * Deletes an existing item from explorer
 *
 * @param {Object} data Data for deleting item in file explorer
 *
 * @returns {Object} A new action object
 */
export const deleteExplorerItem = (data) => ({
  type: DELETE_EXPLORER_ITEM,
  payload: {
    ...data
  }
});
