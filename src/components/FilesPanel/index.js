/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FilePanelItem from "./FilePanelItem";

const getFilesPanelByPath = (data, path) => {
  let mainData = data;

  const pathParts = path.split("/").slice(1);
  for (const part of pathParts) {
    mainData = mainData.children.find(item => item.slug === part);
  }
  return mainData;
};

const FilesPanel = ({ data: { explorer, currentPath } }) => {
  const data =
    currentPath === "root"
      ? explorer
      : getFilesPanelByPath(explorer, currentPath);

  return (
    <div className="files-panel">
      {data.children &&
        data.children.map(item => (
          <FilePanelItem
            title={item.name}
            type={item.type}
            key={item.name}
            slug={item.slug || ""}
          />
        ))}
    </div>
  );
};

export default FilesPanel;
