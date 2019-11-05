/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as File from "./../../images/file.png";
import * as Folder from "./../../images/folder.png";

const FilesPanel = () => {
  return (
    <div className="files-panel">
      <a href="#" className="files-panel__item file">
        <div className="files-panel__item-extension">
          <img src={File} alt="File" />
          <span className="files-panel__item-extension-name">html</span>
        </div>
        <p className="files-panel__item-title">index.html</p>
      </a>
      <a href="#" className="files-panel__item file">
        <div className="files-panel__item-extension">
          <img src={File} alt="File" />
          <span className="files-panel__item-extension-name">html</span>
        </div>
        <p className="files-panel__item-title">index.html</p>
      </a>
      <a href="#" className="files-panel__item folder">
        <img src={Folder} alt="File" />
        <p className="files-panel__item-title">Task 1</p>
      </a>
      <a href="#" className="files-panel__item folder">
        <img src={Folder} alt="File" />
        <p className="files-panel__item-title">Task 2</p>
      </a>
      <a href="#" className="files-panel__item file">
        <div className="files-panel__item-extension">
          <img src={File} alt="File" />
          <span className="files-panel__item-extension-name">html</span>
        </div>
        <p className="files-panel__item-title">index.html</p>
      </a>
    </div>
  );
};

export default FilesPanel;
