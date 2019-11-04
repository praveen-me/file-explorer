import React from "react";
import SideBarItem from "./SideBarItem";
import SideBarItemWithSubList from "./SideBarItemWithSubList";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar__header">Root</h2>
      <div className="sidebar__list">
        <SideBarItem title="Songs" active />
        <SideBarItem title="Movies" isNestedMenu />
        <SideBarItem title="Videos" />
        <SideBarItemWithSubList title="My Test Folder"/>
        <div className="sidebar__list-item">
          <h3 className="sidebar__list-item_title">Screenshots</h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
