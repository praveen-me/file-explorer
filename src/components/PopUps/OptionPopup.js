import React from "react";

const OptionPopup = ({
  open,
  toggleInfo,
  deleteItem,
  isInfoModalOpen,
  type
}) => {
  return (
    <div
      className="options"
      style={{
        zIndex: isInfoModalOpen ? 0 : 15
      }}
    >
      <button
        className="options__btn btn"
        onClick={open}
        disabled={type === "file"}
      >
        Open
      </button>
      <button className="options__btn btn" onClick={toggleInfo}>
        Get Info
      </button>
      <button
        className="options__btn options__btn--delete btn"
        onClick={deleteItem}
      >
        Delete
      </button>
    </div>
  );
};

export default OptionPopup;
