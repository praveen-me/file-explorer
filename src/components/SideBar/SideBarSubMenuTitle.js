/* eslint-disable no-restricted-globals */
import React from "react";
import { useDispatch } from "react-redux";
import DropDown from "../utils/DropDown";
import { updatePath } from "../../store/actions/common.actions";
import { INIT_SLUG } from "../../utils";

const SideBarSubMenuTitle = ({
  name,
  isOpen,
  toggleMenu,
  isChildren,
  fullPath
}) => {
  const dispatch = useDispatch();

  /**
   * Dispatches action for updating path and pushing url to current one
   * @param {Object} event Event Object
   */
  const handlePathUpdate = (event) => {
    dispatch(updatePath(fullPath, false, null, true));
    history.pushState(
      {
        urlPath: fullPath.slice(INIT_SLUG.length)
      },
      name,
      fullPath.slice(INIT_SLUG.length)
    );
    event.stopPropagation();
  };

  return (
    <button
      className={`sidebar__list-item ${
        location.pathname === fullPath.slice(INIT_SLUG.length)
          ? "sidebar__list-item--active"
          : ""
      } ${isOpen ? "sidebar__list-item--expand" : ""} btn`}
      onClick={handlePathUpdate}
    >
      <h3 className="sidebar__list-item_name">{name}</h3>
      {isChildren && (
        <div className="btn" onClick={toggleMenu}>
          <DropDown className={isOpen ? "reverse-dropdown" : ""} />
        </div>
      )}
    </button>
  );
};

export default SideBarSubMenuTitle;
