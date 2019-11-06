/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useDispatch } from "react-redux";
import * as File from "./../../images/file.png";
import * as Folder from "./../../images/folder.png";
import { updatePath } from "../../store/actions/common.actions";
import PanelItemInfo from "../PopUps/PanelItemInfo";
import PanelImage from "../utils/PanelImge";

const FilePanelItem = ({ type, title, slug }) => {
  const dispatch = useDispatch();

  const handleDirectoryClick = () => {
    if (slug) {
      dispatch(updatePath(slug));
    }
    return;
  };

  return (
    <button
      className={`files-panel__item ${type}`}
      onDoubleClick={handleDirectoryClick}
      disabled={type === "file" ? true : false}
    >
      <PanelImage type={type} title={title} />
      <p className="files-panel__item-title">{title}</p>
    </button>
  );
};

export default FilePanelItem;
