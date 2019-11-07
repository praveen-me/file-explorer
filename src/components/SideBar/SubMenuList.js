import React from "react";
import SideBarItemWithSubList from "./SideBarItemWithSubList";
import SideBarItem from "./SideBarItem";

const SubMenuList = ({ data, fullPath }) => {
  return (
    <div className="sidebar__list_sublist">
      {data.map((child, index) => {
        return child.children ? (
          <SideBarItemWithSubList
            name={child.name}
            data={child.children}
            key={child.slug}
            fullPath={`${fullPath}/${child.slug}`}
          />
        ) : (
          <SideBarItem
            isSublistItem
            name={child.name}
            key={child.slug + index}
          />
        );
      })}
    </div>
  );
};

export default SubMenuList;
