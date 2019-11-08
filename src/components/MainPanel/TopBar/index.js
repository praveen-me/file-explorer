/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CurrentPath from "./CurrentPath";
import TopBarSearch from "./TopBarSearch";
import { updatePath } from "../../../store/actions/common.actions";

const TopBar = (props) => {
  const currentPath = useSelector((state) => state.currentPath);
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(updatePath(null, true, currentPath.split("/").length - 2));
    props.history.goBack();
  };

  return (
    <div className="topbar">
      <div className="topbar__left-section">
        {currentPath !== "root" && (
          <button
            onClick={handleGoBack}
            className="topbar__left-section-link go-back btn"
          >
            <img src={require("../../../images/up.png")} alt="Go Back" />
          </button>
        )}
        <CurrentPath path={currentPath} />
      </div>
      <TopBarSearch />
    </div>
  );
};

export default TopBar;
