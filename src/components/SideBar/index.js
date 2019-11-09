import React from "react";
import { useDispatch } from "react-redux";
import SideBarItem from "./SideBarItem";
import SideBarItemWithSubList from "./SideBarItemWithSubList";
import { updatePath } from "../../store/actions/common.actions";
import { INIT_SLUG } from "../../utils";

const SideBar = ({ data: { name, children } }) => {
  const dispatch = useDispatch();

  // Updating Initial Path
  const updatePathToRoot = () => {
    dispatch(updatePath(INIT_SLUG, false, null, true));
    // eslint-disable-next-line no-restricted-globals
    history.pushState(
      {
        urlPath: "/"
      },
      "Root",
      "/"
    );
  };

  return (
    <div className="sidebar">
      <button className="btn" onClick={updatePathToRoot}>
        <h2 className="sidebar__header">{name}</h2>
      </button>

      {children.length && (
        <div className="sidebar__list">
          {children.map((child) => {
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
                key={child.name}
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
