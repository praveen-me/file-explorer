/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FilePanelItem from "./FilePanelItem";

const FilesPanel = ({ data: { explorer } }) => {
  const data = explorer;

  return (
    <div className="files-panel">
      {data.children &&
        data.children.map(item => (
          <FilePanelItem title={item.name} type={item.type} key={item.name} />
        ))}
    </div>
  );
};

export default FilesPanel;
