import React from "react";
import SideBarItemWithSubList from "./SideBarItemWithSubList";
import SideBarSubListItem from "./SideBarSubListItem";

const SubMenuList = ({ data }) => {
  return (
    <div className="sidebar__list_sublist">
      {data.map((child, index) => {
        return child.children && child.children.length ? (
          <SideBarItemWithSubList
            name={child.name}
            data={child.children}
            key={child.slug}
          />
        ) : (
          <SideBarSubListItem name={child.name} key={child.slug + index} />
        );
      })}
    </div>
  );
};

export default SubMenuList;
