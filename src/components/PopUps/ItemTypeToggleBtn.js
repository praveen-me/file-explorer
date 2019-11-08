import React from "react";

const ItemTypeToggleBtn = ({ active, toggleItemType, isFolder }) => {
  return (
    <button
      className={`add_item__toggle-btn btn ${
        active ? "add_item__toggle-btn--active" : ""
      }`}
      onClick={(e) => toggleItemType(e, isFolder ? "folder" : "file")}
    >
      {isFolder ? "Folder" : "File"}
    </button>
  );
};

export default ItemTypeToggleBtn;
