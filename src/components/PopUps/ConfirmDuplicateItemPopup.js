import React from "react";
import { useDispatch } from "react-redux";
import { handleDuplicateData } from "../../store/actions/explorer.action";

const ConfirmDuplicateItemPopup = ({ data }) => {
  const dispatch = useDispatch();

  // Close Modal
  const closeModal = (event, isReplaced) => {
    event.preventDefault();
    dispatch(
      handleDuplicateData({
        shouldExistedDataReplace: isReplaced
      })
    );
  };

  return (
    <div className="overlay">
      <div className="confirm-duplicate modal">
        <div className="modal__head-container">
          <h3 className="modal-head__head">{data.name} already exists.</h3>
          <p>Do you want to keep it or replace it?</p>
        </div>
        <div className="confirm-duplicate__btn-container">
          <button
            className="confirm-duplicate__btn btn"
            onClick={(e) => closeModal(e, false)}
          >
            Keep It
          </button>
          <button
            className="confirm-duplicate__btn btn"
            onClick={(e) => closeModal(e, true)}
          >
            Replace
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDuplicateItemPopup;
