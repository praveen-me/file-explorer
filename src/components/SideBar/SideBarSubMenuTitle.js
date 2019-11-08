/* eslint-disable no-restricted-globals */
import React from "react";
import { useDispatch } from "react-redux";
import DropDown from "../utils/DropDown";
import { updatePath } from "../../store/actions/common.actions";

const SideBarSubMenuTitle = ({
  name,
  isOpen,
  toggleMenu,
  isChildren,
  fullPath
}) => {
  const dispatch = useDispatch();

  const handlePathUpdate = (event) => {
    dispatch(updatePath(fullPath, false, null, true));
    history.pushState(
      {
        urlPath: fullPath.slice(4)
      },
      name,
      fullPath.slice(4)
    );
    event.stopPropagation();
  };

  return (
    <div
      className={`sidebar__list-item ${
        isOpen ? "sidebar__list-item--expand" : ""
      } `}
      onClick={handlePathUpdate}
    >
      <h3 className="sidebar__list-item_name">{name}</h3>
      {isChildren && (
        <button className="btn" onClick={toggleMenu}>
          <DropDown className={isOpen ? "reverse-dropdown" : ""} />
        </button>
      )}
    </div>
  );
};

export default SideBarSubMenuTitle;
