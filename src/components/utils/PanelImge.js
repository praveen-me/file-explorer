import React from "react";
import * as File from "./../../images/file.png";
import * as Folder from "./../../images/folder.png";

const PanelImage = ({ type, title = "" }) => {
  const Img = <img src={type === "file" ? File : Folder} alt={type} />;

  return type === "file" ? (
    <div className="files-panel__item-extension">
      {Img}
      <span className="files-panel__item-extension-name">
        {title.split(".")[1]}
      </span>
    </div>
  ) : (
    <>{Img}</>
  );
};

export default PanelImage;
