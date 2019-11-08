import React from "react";

const Button = ({
  title,
  handleClick,
  isDisabled = false,
  additionalClasses = []
}) => (
  <button
    className={`options__btn btn ${additionalClasses.join(" ")}`}
    onClick={handleClick}
    disabled={isDisabled}
  >
    {title}
  </button>
);

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
      <Button title="Open" handleClick={open} isDisabled={type === "file"} />
      <Button title="Get Info" handleClick={toggleInfo} />
      <Button
        title="Delete"
        handleClick={deleteItem}
        additionalClasses={["options__btn--delete"]}
      />
    </div>
  );
};

export default OptionPopup;
