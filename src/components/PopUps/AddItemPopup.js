import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CloseBtn from "../utils/CloseBtn";
import ItemTypeToggleBtn from "./ItemTypeToggleBtn";
import { addExplorerItem } from "../../store/actions/explorer.action";

const AddItemPopup = ({ closeModal }) => {
  const [itemData, setItemData] = useState({
    type: "folder",
    name: "",
    author: ""
  });

  const dispatch = useDispatch();

  // Create createdAt when form is going to submit
  const handleChange = (event) => {
    setItemData({
      ...itemData,
      [event.target.name]: event.target.value
    });
  };

  const toggleItemType = (event, type) => {
    event.preventDefault();
    setItemData({
      ...itemData,
      type
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (itemData.type === "folder" && "size" in itemData) {
      delete itemData.size;
    } else if (itemData.type === "file" && "slug" in itemData) {
      delete itemData.slug;
    }

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
            <input
              type="text"
              className="add_item__details-item"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="text"
              className="add_item__details-item"
              name="author"
              placeholder="Author"
              onChange={handleChange}
            />
            {itemData.type === "file" && (
              <input
                type="text"
                className="add_item__details-item"
                name="size"
                placeholder="Size"
                onChange={handleChange}
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
