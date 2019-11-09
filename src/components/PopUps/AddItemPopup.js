import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CloseBtn from "../utils/CloseBtn";
import ItemTypeToggleBtn from "./ItemTypeToggleBtn";
import { addExplorerItem } from "../../store/actions/explorer.action";

const InputField = ({ name, placeholder, handleChange }) => {
  return (
    <input
      name={name}
      className="add_item__details-item"
      placeholder={placeholder}
      type="text"
      onChange={handleChange}
    />
  );
};

const AddItemPopup = ({ closeModal }) => {
  const [itemData, setItemData] = useState({
    type: "folder",
    name: "",
    author: ""
  });

  const dispatch = useDispatch();

  // Handles syncing field values with the components state
  const handleChange = (event) => {
    setItemData({
      ...itemData,
      [event.target.name]: event.target.value
    });
  };

  // Toggles panel item type
  const toggleItemType = (event, type) => {
    event.preventDefault();
    setItemData({
      ...itemData,
      type
    });
  };

  // Handles form for adding item to explorer
  const handleSubmit = (event) => {
    event.preventDefault();

    // Deleting unnecessary properties according to the folder and files
    if (itemData.type === "folder" && "size" in itemData) {
      delete itemData.size;
    } else if (itemData.type === "file" && "slug" in itemData) {
      delete itemData.slug;
    }

    // Generating necessary properties if item is a folder
    if (itemData.type === "folder") {
      itemData.slug = itemData.name
        .toLowerCase()
        .split(" ")
        .join("-");

      itemData.children = [];
    }

    itemData.createdAt = new Date().toDateString().toString();

    dispatch(addExplorerItem(itemData));
    closeModal();
  };

  return (
    <div className="overlay">
      <div className="add_item modal">
        <div className="modal__head-container">
          <h3 className="modal-head__head">Create New </h3>
          <button className="btn" onClick={closeModal}>
            <CloseBtn />
          </button>
        </div>
        <form className="add_item__form" onSubmit={handleSubmit}>
          <div className="add_item__toggle">
            <ItemTypeToggleBtn
              toggleItemType={toggleItemType}
              active={itemData.type !== "folder"}
            />
            <ItemTypeToggleBtn
              isFolder
              toggleItemType={toggleItemType}
              active={itemData.type === "folder"}
            />
          </div>
          <section className="add_item__details">
            <InputField
              name="name"
              placeholder="Name"
              handleChange={handleChange}
            />
            <InputField
              name="author"
              placeholder="Author"
              handleChange={handleChange}
            />
            {itemData.type === "file" && (
              <InputField
                name="size"
                placeholder="Size"
                handleChange={handleChange}
              />
            )}
          </section>
          <button
            type="submit"
            className="add_item__submit btn"
            onClick={handleSubmit}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemPopup;
