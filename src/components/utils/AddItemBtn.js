import React from "react";
import * as AddItemImage from "./../../images/add-item.png";

const AddItemBtn = () => {
  return (
    <button className="btn">
      <img src={AddItemImage} alt="Add Item" />
    </button>
  );
};

export default AddItemBtn;
