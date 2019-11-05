/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import * as File from "./../../images/file.png";
import * as Folder from "./../../images/folder.png";

const FilePanelItem = ({ type, title }) => {
  const Img = <img src={type === "file" ? File : Folder} alt={type} />;

  return (
    <a href="#" className={`files-panel__item ${type}`}>
      {type === "file" ? (
        <div className="files-panel__item-extension">
          {Img}
          <span className="files-panel__item-extension-name">
            {title.split(".")[1]}
          </span>
        </div>
      ) : (
        <>{Img}</>
      )}

      <p className="files-panel__item-title">{title}</p>
    </a>
  );
};

export default FilePanelItem;
