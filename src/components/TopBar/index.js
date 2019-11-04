import React from "react";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar__left-section">
        <button className="go-back">
          <img src={require("../../images/up.png")} alt="Go Back" />
        </button>
        <div className="topbar__current-path">
          <p>root/movies/inception</p>
        </div>
      </div>
      <form className="topbar__search">
        <input
          type="text"
          className="topbar__search-text"
          placeholder="Search for anything"
        />
      </form>
    </div>
  );
};

export default TopBar;
