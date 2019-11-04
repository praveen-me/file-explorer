import React from "react";
import SideBarItem from "./SideBarItem";

const SubMenuList = () => {
  return (
    <div className="sidebar__list_sublist">
      <SideBarItem isSubMenuItem title="Recordings" />
      <SideBarItem isSubMenuItem title="Recordings" />
      <SideBarItem isSubMenuItem title="Projects" />
    </div>
  );
};

export default SubMenuList;
