import React from "react";
import CloseBtn from "../utils/CloseBtn";
import PanelImage from "../utils/PanelImge";

const InfoPopupDetailItem = ({ keyName, value }) => {
  return (
    <div className="panel-item-info__details-item">
      <span>{keyName}:</span>
      <span className="panel-item-info__details-item-title">{value}</span>
    </div>
  );
};

const PanelItemInfo = ({ toggleInfo, name, size, author, createdAt, type }) => {
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
          <PanelImage type={type} title={name} />
        </div>
        <div className="panel-item-info__details">
          <InfoPopupDetailItem keyName="Name" value={name} />
          <InfoPopupDetailItem keyName="Author" value={author} />
          <InfoPopupDetailItem keyName="Created At" value={createdAt} />
          {type === "file" && (
            <InfoPopupDetailItem keyName="Size" value={size} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PanelItemInfo;
