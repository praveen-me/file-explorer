/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import CurrentPath from "./CurrentPath";
import TopBarSearch from "./TopBarSearch";

const TopBar = () => {
  const currentPath = useSelector(state => state.currentPath);

  return (
    <div className="topbar">
      <div className="topbar__left-section">
        {currentPath !== "root" && (
          <a herf="#" className="topbar__left-section-link go-back">
            <img src={require("../../images/up.png")} alt="Go Back" />
          </a>
        )}
        <CurrentPath path={currentPath} />
      </div>
      <TopBarSearch />
    </div>
  );
};

export default TopBar;
