import React, { useState, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import FilePanelItem from "./FilePanelItem";
import AddItemBtn from "../../utils/AddItemBtn";
import { getDataByPath, INIT_SLUG } from "../../../utils";
const ConfirmDuplicateItemPopup = lazy(() =>
  import("../../PopUps/ConfirmDuplicateItemPopup")
);
const AddItemPopup = lazy(() => import("../../PopUps/AddItemPopup"));

// eslint-disable-next-line no-restricted-globals
const FilesPanel = ({ data: { explorer, currentPath } }) => {
  const itemExisted = useSelector((state) => state.duplicatedItemData);
  const [isAddItemModalOpen, setIsAddItemPanelOpen] = useState(false);
  const query = useSelector((state) => state.query);
  let data =
    currentPath === INIT_SLUG
      ? explorer.children
      : getDataByPath(explorer, currentPath).children;

  if (query) {
    const reg = new RegExp(query, "i");
    data = getDataByPath(explorer, currentPath).children.filter((item) =>
      reg.test(item.name)
    );
  }

  // Toggles Add Item Modal
  const toggleAddItemModal = () => setIsAddItemPanelOpen(!isAddItemModalOpen);

  return (
    <div className="files-panel">
      {data && data.map((item) => <FilePanelItem key={item.name} {...item} />)}
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
