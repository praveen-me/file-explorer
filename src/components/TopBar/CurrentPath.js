import React from "react";

const CurrentPath = ({ path }) => {
  const mainPath = path.split("/");

  return (
    <div className="topbar__current-path">
      <p>
        {mainPath.map((path, index) => {
          if (index === mainPath.length - 1) {
            return (
              <span key={path} className="topbar__current-path--current">
                {path}
              </span>
            );
          } else {
            return path + "/";
          }
        })}
      </p>
    </div>
  );
};

export default CurrentPath;
