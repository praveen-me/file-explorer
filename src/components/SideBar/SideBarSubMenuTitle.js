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
        isOpen ? "sidebar__list-item--expand" : ""
      } btn`}
      onClick={handlePathUpdate}
    >
      <h3 className="sidebar__list-item_name">{name}</h3>
      {isChildren && (
        <button className="btn" onClick={toggleMenu}>
          <DropDown className={isOpen ? "reverse-dropdown" : ""} />
        </button>
      )}
    </button>
  );
};

export default SideBarSubMenuTitle;
