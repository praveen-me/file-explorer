/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, Suspense, lazy } from "react";
import FilePanelItem from "./FilePanelItem";
import AddItemBtn from "../../utils/AddItemBtn";
import { getDataByPath, INIT_SLUG } from "../../../utils";
const AddItemPopup = lazy(() => import("../../PopUps/AddItemPopup"));

const FilesPanel = ({ data: { explorer, currentPath } }) => {
  const [isAddItemModalOpen, setIsAddItemPanelOpen] = useState(false);

  const data =
    currentPath === INIT_SLUG ? explorer : getDataByPath(explorer, currentPath);

  // Toggles Add Item Modal
  const toggleAddItemModal = () => setIsAddItemPanelOpen(!isAddItemModalOpen);

  return (
    <div className="files-panel">
      {data.children &&
        data.children.map((item) => (
          <FilePanelItem key={item.name} {...item} />
        ))}
      <AddItemBtn openModal={toggleAddItemModal} />
      {isAddItemModalOpen && (
        <Suspense fallback={<p>Loading...</p>}>
          <AddItemPopup closeModal={toggleAddItemModal} />
        </Suspense>
      )}
    </div>
  );
};

export default FilesPanel;
