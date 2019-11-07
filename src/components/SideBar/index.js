import React from "react";
import SideBarItem from "./SideBarItem";
import SideBarItemWithSubList from "./SideBarItemWithSubList";

const SideBar = ({ data: { name, children } }) => {
  const INIT_PATH = "root";

  return (
    <div className="sidebar">
      <h2 className="sidebar__header">{name}</h2>

      {children.length && (
        <div className="sidebar__list">
          {children.map((child, index) => {
            return child.children ? (
              <SideBarItemWithSubList
                name={child.name}
                data={child.children}
                key={child.slug}
                fullPath={`${INIT_PATH}/${child.slug}`}
              />
            ) : (
              <SideBarItem
                name={child.name}
                key={child.toString() + index}
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
