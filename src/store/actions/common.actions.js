import { UPDATE_CURRENT_PATH } from "./../types";

export const updatePath = (data, removeLastPathPart = false) => ({
  type: UPDATE_CURRENT_PATH,
  payload: {
    newPathPart: data,
    removeLastPathPart: removeLastPathPart
  }
});
