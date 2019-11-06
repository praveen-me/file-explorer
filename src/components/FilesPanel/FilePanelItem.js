/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePath } from "../../store/actions/common.actions";
import PanelItemInfo from "../PopUps/PanelItemInfo";
import PanelImage from "../utils/PanelImge";
import OptionPopup from "../PopUps/OptionPopup";

const FilePanelItem = props => {
  const [isOptionsModalOpen, setIsModalOptionsOpen] = useState(false);
  const [isItemInfoModalOpen, setIsItemInfoModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { type, name, slug = "" } = props;

  const handleDirectoryClick = () => {
    if (type === "file") return;
    if (slug) {
      dispatch(updatePath(slug));
    }
    return;
  };

  const handleRightClick = e => {
    e.preventDefault();
    if (e.type === "click") {
      setIsModalOptionsOpen(false);
      return;
    }
    setIsModalOptionsOpen(true);
  };

  const togglePanelInfoModal = () =>
    setIsItemInfoModalOpen(!isItemInfoModalOpen);

  return (
    <div
      style={{ position: isOptionsModalOpen ? "relative" : "static" }}
      className={`files-panel__item ${type}`}
    >
      <button
        className="btn"
        onDoubleClick={handleDirectoryClick}
        onContextMenu={handleRightClick}
        onClick={handleRightClick}
      >
        <PanelImage type={type} title={name} />
        <p className="files-panel__item-title">{name}</p>
      </button>
      {isOptionsModalOpen && (
        <OptionPopup
          toggleInfo={togglePanelInfoModal}
          isInfoModalOpen={isItemInfoModalOpen}
          open={handleDirectoryClick}
        />
      )}
      {isItemInfoModalOpen && (
        <PanelItemInfo toggleInfo={togglePanelInfoModal} {...props} />
      )}
    </div>
  );
};

export default FilePanelItem;
