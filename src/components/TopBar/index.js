/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CurrentPath from "./CurrentPath";
import TopBarSearch from "./TopBarSearch";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar__left-section">
        <a herf="#" className="topbar__left-section-link go-back">
          <img src={require("../../images/up.png")} alt="Go Back" />
        </a>
        <CurrentPath />
      </div>
      <TopBarSearch />
    </div>
  );
};

export default TopBar;
