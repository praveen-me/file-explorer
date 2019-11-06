import React from "react";
import * as AddItemImage from "./../../images/add-item.png";

const AddItemBtn = ({ openModal }) => {
  return (
    <button className="btn" onClick={openModal}>
      <img src={AddItemImage} alt="Add Item" />
    </button>
  );
};

export default AddItemBtn;
