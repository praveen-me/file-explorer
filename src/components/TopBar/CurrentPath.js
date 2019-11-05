import React from "react";

const CurrentPath = () => {
  return (
    <div className="topbar__current-path">
      <p>
        root/movies/
        <span className="topbar__current-path--current">inception</span>
      </p>
    </div>
  );
};

export default CurrentPath;
