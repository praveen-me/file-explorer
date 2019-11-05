import React from "react";

const TopBarSearch = () => {
  return (
    <form className="topbar__search">
      <input
        type="text"
        className="topbar__search-text"
        placeholder="Search for anything"
      />
    </form>
  );
};

export default TopBarSearch;
