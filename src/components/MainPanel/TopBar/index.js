/* eslint-disable no-restricted-globals */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CurrentPath from "./CurrentPath";
import TopBarSearch from "./TopBarSearch";
import { updatePath } from "../../../store/actions/common.actions";

const TopBar = (props) => {
  const currentPath = useSelector((state) => state.currentPath);
  const dispatch = useDispatch();

  // Handling Go back
  const handleGoBack = () => {
    let pathArr = currentPath.split("/");

    let path = pathArr.slice(1, pathArr.length - 1).join("/");

    props.history.push(path.length ? `/${path}` : "/");

    dispatch(updatePath(null, true, pathArr.length - 2));
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
