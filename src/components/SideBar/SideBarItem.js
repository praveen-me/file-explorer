import React from "react";

const SideBarItem = ({ name }) => {
  return (
    <div className="sidebar__list-item">
      <h4 className="sidebar__list_sublist-item-title">{name}</h4>
    </div>
  );
};

export default SideBarItem;
