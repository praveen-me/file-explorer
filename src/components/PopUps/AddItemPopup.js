import React from "react";
import CloseBtn from "../utils/CloseBtn";

const AddItemPopup = () => {
  return (
    <div className="add_item modal">
      <div className="modal__head-container">
        <h3 className="modal-head__head">Create New </h3>
        <CloseBtn />
      </div>
      <form className="add_item__form">
        <div className="add_item__toggle">
          <button className="add_item__toggle-btn btn">File</button>
          <button className="add_item__toggle-btn btn add_item__toggle-btn--active">
            Folder
          </button>
        </div>
        <section className="add_item__details">
          <input
            type="text"
            className="add_item__details-item"
            name="name"
            placeholder="Name"
          />
          <input
            type="text"
            className="add_item__details-item"
            name="creator"
            placeholder="Creator"
          />
          <input
            type="text"
            className="add_item__details-item"
            name="Size"
            placeholder="Size"
          />
        </section>
        <button type="submit" className="add_item__submit btn">
          Create
        </button>
      </form>
    </div>
  );
};

export default AddItemPopup;
