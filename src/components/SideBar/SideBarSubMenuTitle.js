import React from "react";
import DropDown from "../utils/DropDown";

const SideBarSubMenuTitle = ({ name, isOpen, toggleMenu }) => {
  return (
    <div
      className={`sidebar__list-item ${
        isOpen ? "sidebar__list-item--expand" : ""
      } `}
      onClick={toggleMenu}
    >
      <h3 className="sidebar__list-item_name">{name}</h3>

      <DropDown className={isOpen ? "reverse-dropdown" : ""} />
    </div>
  );
};

export default SideBarSubMenuTitle;
