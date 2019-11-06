export const getDataByPath = (data, path) => {
  if (path === "root") {
    return data;
  }

  let mainData = data;

  const pathParts = path.split("/").slice(1);
  for (const part of pathParts) {
    mainData = mainData.children.find(item => item.slug === part);
  }
  return mainData;
};
