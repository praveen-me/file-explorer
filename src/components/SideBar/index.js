import React from "react";
import { useDispatch } from "react-redux";
import SideBarItem from "./SideBarItem";
import SideBarItemWithSubList from "./SideBarItemWithSubList";
import { updatePath } from "../../store/actions/common.actions";
import { INIT_SLUG } from "../../utils";

const SideBar = ({ data: { name, children } }) => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <button
        className="btn"
        onClick={() => dispatch(updatePath(INIT_SLUG, false, null, true))}
      >
        <h2 className="sidebar__header">{name}</h2>
      </button>

      {children.length && (
        <div className="sidebar__list">
          {children.map((child, index) => {
            return child.children ? (
              <SideBarItemWithSubList
                name={child.name}
                data={child.children}
                key={child.slug}
                fullPath={`${INIT_SLUG}/${child.slug}`}
              />
            ) : (
              <SideBarItem
                name={child.name}
                key={name + index}
                type={child.type}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SideBar;
