/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import FilePanelItem from "./FilePanelItem";
import AddItemBtn from "../../utils/AddItemBtn";
import { getDataByPath, INIT_SLUG } from "../../../utils";
const ConfirmDuplicateItemPopup = lazy(() =>
  import("../../PopUps/ConfirmDuplicateItemPopup")
);
const AddItemPopup = lazy(() => import("../../PopUps/AddItemPopup"));

const FilesPanel = ({ data: { explorer, currentPath } }) => {
  const itemExisted = useSelector((state) => state.duplicatedItemData);

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
      <Suspense fallback={<p>Loading...</p>}>
        {isAddItemModalOpen && <AddItemPopup closeModal={toggleAddItemModal} />}

        {itemExisted.isAlreadyExistsInExplorer && (
          <ConfirmDuplicateItemPopup data={itemExisted} />
        )}
      </Suspense>
    </div>
  );
};

export default FilesPanel;
