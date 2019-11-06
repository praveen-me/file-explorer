/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import FilePanelItem from "./FilePanelItem";
import AddItemBtn from "../utils/AddItemBtn";
import AddItemPopup from "../PopUps/AddItemPopup";
import PanelItemInfo from "../PopUps/PanelItemInfo";

const getFilesPanelByPath = (data, path) => {
  let mainData = data;

  const pathParts = path.split("/").slice(1);
  for (const part of pathParts) {
    mainData = mainData.children.find(item => item.slug === part);
  }
  return mainData;
};

const FilesPanel = ({ data: { explorer, currentPath } }) => {
  const [isAddItemModalOpen, setIsAddItemPanelOpen] = useState(false);

  const data =
    currentPath === "root"
      ? explorer
      : getFilesPanelByPath(explorer, currentPath);

  const toggleAddItemModal = () => setIsAddItemPanelOpen(!isAddItemModalOpen);

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
      <AddItemBtn openModal={toggleAddItemModal} />
      {isAddItemModalOpen && <AddItemPopup closeModal={toggleAddItemModal} />}
    </div>
  );
};

export default FilesPanel;
