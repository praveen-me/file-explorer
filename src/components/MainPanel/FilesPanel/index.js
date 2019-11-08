/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import FilePanelItem from "./FilePanelItem";
import AddItemBtn from "../../utils/AddItemBtn";
import AddItemPopup from "../../PopUps/AddItemPopup";
import { getDataByPath } from "../../../utils";

const FilesPanel = ({ data: { explorer, currentPath } }) => {
  const [isAddItemModalOpen, setIsAddItemPanelOpen] = useState(false);

  const data =
    currentPath === "root" ? explorer : getDataByPath(explorer, currentPath);

  const toggleAddItemModal = () => setIsAddItemPanelOpen(!isAddItemModalOpen);

  return (
    <div className="files-panel">
      {data.children &&
        data.children.map((item) => (
          <FilePanelItem key={item.name} {...item} />
        ))}
      <AddItemBtn openModal={toggleAddItemModal} />
      {isAddItemModalOpen && <AddItemPopup closeModal={toggleAddItemModal} />}
    </div>
  );
};

export default FilesPanel;
