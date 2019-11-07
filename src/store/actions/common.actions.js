import { UPDATE_CURRENT_PATH } from "./../types";

export const updatePath = (
  data,
  removeLastPathPart = false,
  croppedIndex = null,
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
