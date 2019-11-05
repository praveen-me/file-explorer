import React from "react";

const SideBarSubListItem = ({ name }) => {
  return (
    <div className="sidebar__list_sublist-item">
      <h3 className="sidebar__list-item_name">{name}</h3>
    </div>
  );
};

export default SideBarSubListItem;
