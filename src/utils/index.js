export const INIT_SLUG = "root";
/**
 * Generate new data source according to the path
 *
 * @param {Object} data Old data Source
 * @param {String} path Path to make new data source
 *
 * @returns {Object} New Data Source
 */
export const getDataByPath = (data, path) => {
  if (path === "root") {
    return data;
  }

  let mainData = data;

  const pathParts = path.split("/").slice(1);
  for (const part of pathParts) {
    mainData = mainData.children.find((item) => item.slug === part);
  }
  return mainData;
};
