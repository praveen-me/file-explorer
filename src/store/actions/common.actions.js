import { UPDATE_CURRENT_PATH } from "./../types";

/**
 * Updates the current path in state via various parameters
 *
 * @param {String} data Path string
 * @param {Boolean} removeLastPathPart Flag for removing last part from the current path
 * @param {Number} croppedIndex Index for creating new path from existing one
 * @param {Boolean} replacePath Flag for replacing whole path
 *
 * @returns {Object} A new action object
 */
export const updatePath = (
  data,
  removeLastPathPart = false,
  croppedIndex = -1,
  replacePath = false
) => {
  let actionData = {
    path: data,
    removeLastPathPart: removeLastPathPart
  };

  if (removeLastPathPart) {
    actionData = {
      removeLastPathPart,
      croppedIndex
    };
  }

  return {
    type: UPDATE_CURRENT_PATH,
    payload: {
      ...actionData,
      replacePath
    }
  };
};
