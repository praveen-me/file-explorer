import React from "react";
import TopBar from "./TopBar";
import FilesPanel from "./FilesPanel";

const MainPanel = ({ data }) => {
  return (
    <div className="main-panel">
      <TopBar />
      <FilesPanel data={data} />
    </div>
  );
};

export default MainPanel;
