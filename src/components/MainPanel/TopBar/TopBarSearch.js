import React from "react";
import { useDispatch } from "react-redux";
import { updateQuery } from "../../../store/actions/common.actions";

const TopBarSearch = () => {
  const dispatch = useDispatch();

  const handleQueryUpdate = (event) => {
    dispatch(updateQuery(event.target.value));
  };

  return (
    <form className="topbar__search">
      <input
        type="text"
        className="topbar__search-text"
        placeholder="Search for anything"
        onChange={handleQueryUpdate}
      />
    </form>
  );
};

export default TopBarSearch;
