import React from "react";
import TopBar from "../TopBar";
import FilesPanel from "../FilesPanel";

const MainPanel = () => {
  return (
    <div className="main-panel">
      <TopBar />
      <FilesPanel />
    </div>
  );
};

export default MainPanel;
