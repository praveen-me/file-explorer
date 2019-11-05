/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as File from "./../../images/file.png";
import * as Folder from "./../../images/folder.png";
import FilePanelItem from "./FilePanelItem";

const FilesPanel = () => {
  return (
    <div className="files-panel">
      <FilePanelItem title="index.html" type="file" />
      <FilePanelItem title="index.js" type="file" />
      <FilePanelItem title="Gallery" type="folder" />
      <FilePanelItem title="Documents" type="folder" />
      <FilePanelItem title="index.html" type="file" />
      <FilePanelItem title="main.jpg" type="file" />
      <FilePanelItem title="Gallery" type="folder" />
      <FilePanelItem title="index.js" type="file" />
    </div>
  );
};

export default FilesPanel;
