/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, Suspense, lazy } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updatePath } from "../../../store/actions/common.actions";
import PanelImage from "../../utils/PanelImge";
import { deleteExplorerItem } from "../../../store/actions/explorer.action";

// lazy loaded Components
const PanelItemInfo = lazy(() => import("../../PopUps/PanelItemInfo"));
const OptionPopup = lazy(() => import("../../PopUps/OptionPopup"));

const FilePanelItem = (props) => {
  const currentPath = useSelector((state) => state.currentPath);

  const [isOptionsModalOpen, setIsModalOptionsOpen] = useState(false);
  const [isItemInfoModalOpen, setIsItemInfoModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { type, name, slug = "" } = props;

  // handles directory click
  const handleDirectoryClick = () => {
    if (slug) {
      dispatch(updatePath(slug));
      props.history.push(currentPath.slice(4) + "/" + slug);
    }
    return;
  };

  // Handles Right Click on a particular item
  const handleRightClick = (e) => {
    e.preventDefault();
    if (e.type === "click") {
      setIsModalOptionsOpen(false);
      return;
    }
    setIsModalOptionsOpen(true);
  };

  // Toggle Panel Info Modal
  const togglePanelInfoModal = () =>
    setIsItemInfoModalOpen(!isItemInfoModalOpen);

  // Dispatches Action for deleting item
  const handleItemDelete = () => {
    let identifier = name;

    if (type === "folder") {
      identifier = slug;
    }

    dispatch(
      deleteExplorerItem({
        type,
        identifier
      })
    );
  };

  return (
    <div
      style={{ position: isOptionsModalOpen ? "relative" : "static" }} // Setting position according to the modal state
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
      {/* Doing code splitting and load lazy loaded component */}
      <Suspense fallback={<p>Loading...</p>}>
        {isOptionsModalOpen && (
          <OptionPopup
            toggleInfo={togglePanelInfoModal}
            isInfoModalOpen={isItemInfoModalOpen}
            open={handleDirectoryClick}
            type={type}
            deleteItem={handleItemDelete}
          />
        )}
        {isItemInfoModalOpen && (
          <PanelItemInfo toggleInfo={togglePanelInfoModal} {...props} />
        )}
      </Suspense>
    </div>
  );
};

export default withRouter(FilePanelItem);
