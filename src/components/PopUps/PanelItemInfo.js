import React from "react";
import CloseBtn from "../utils/CloseBtn";
import PanelImage from "../utils/PanelImge";
import InfoPopupDetailItem from "./InfoPopupDetailItem";

const PanelItemInfo = ({ toggleInfo }) => {
  return (
    <div className="overlay">
      <div className="panel-item-info modal">
        <div className="modal__head-container">
          <h3 className="modal-head__head">File Info</h3>
          <button className="btn" onClick={toggleInfo}>
            <CloseBtn />
          </button>
        </div>
        <div className="panel-item-info_wrapper">
          <PanelImage type="folder" />
        </div>
        <div className="panel-item-info__details">
          <InfoPopupDetailItem keyName="Name" value="index.html" />
          <InfoPopupDetailItem keyName="Size" value="362kb" />
          <InfoPopupDetailItem keyName="Author" value="Praveen" />
        </div>
      </div>
    </div>
  );
};

export default PanelItemInfo;
