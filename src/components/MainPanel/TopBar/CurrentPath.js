import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { updatePath } from "../../../store/actions/common.actions";

const CurrentPath = ({ path }) => {
  const dispatch = useDispatch();

  const mainPath = path.split("/");

  const handleUpdatePath = index => {
    dispatch(updatePath(null, true, index));
  };

  return (
    <div className="topbar__current-path">
      <p>
        {mainPath.map((path, index) => {
          if (index === mainPath.length - 1) {
            return (
              <span key={path} className="topbar__current-path--current">
                {" " + path}
              </span>
            );
          } else {
            return (
              <Fragment key={index}>
                <button
                  onClick={() => handleUpdatePath(index)}
                  className="topbar__current-path_btn btn"
                >
                  {path}
                </button>
                /
              </Fragment>
            );
          }
        })}
      </p>
    </div>
  );
};

export default CurrentPath;
