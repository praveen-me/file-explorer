import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from "./TopBar";
import FilesPanel from "./FilesPanel";

const MainPanel = ({ data }) => {
  return (
    <div className="main-panel">
      <Router>
        <Route
          path="*"
          render={() => {
            return (
              <>
                <TopBar />
                <FilesPanel data={data} />
              </>
            );
          }}
        />
      </Router>
    </div>
  );
};

export default MainPanel;
