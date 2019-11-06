import React from "react";

const InfoPopupDetailItem = ({ keyName, value }) => {
  return (
    <div className="panel-item-info__details-item">
      <span>{keyName}:</span>
      <span className="panel-item-info__details-item-title">{value}</span>
    </div>
  );
};

export default InfoPopupDetailItem;
