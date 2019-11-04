import React from "react";
import DropDown from "../utils/DropDown";

const SideBarItem = ({
  title,
  isNestedMenu,
  active,
  isOpen,
  isSubMenuItem
}) => {
  return (
    <div
      className={`
			${isSubMenuItem ? "sidebar__list_sublist-item" : "sidebar__list-item"} 
			${active ? "sidebar__list-item--active" : ""} 
			${isOpen ? "sidebar__list-item--expand" : ""} `}
    >
      {isSubMenuItem ? (
        <h4 className="sidebar__list_sublist-item-title">{title}</h4>
      ) : (
        <h3 className="sidebar__list-item_title">{title}</h3>
      )}

      {isNestedMenu && (
        <DropDown className={isOpen ? "reverse-dropdown" : ""} />
      )}
    </div>
  );
};

export default SideBarItem;
