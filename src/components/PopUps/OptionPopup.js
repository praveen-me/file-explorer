import React from "react";

const OptionPopup = () => {
  return (
    <div className="options">
      <button className="options__btn btn">Open</button>
      <button className="options__btn btn">Get Info</button>
      <button className="options__btn options__btn--delete btn">Delete</button>
    </div>
  );
};

export default OptionPopup;
