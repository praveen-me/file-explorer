/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import TopBar from "./TopBar";
import FilesPanel from "./FilesPanel";
import { updatePath } from "../../store/actions/common.actions";

const MainPanel = ({ data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname !== "/") {
      dispatch(updatePath(`root${location.pathname}`, false, null, true));
    }
  }, [dispatch]);

  return (
    <div className="main-panel">
      <Router>
        <Route
          path="*"
          render={(props) => {
            return (
              <>
                <TopBar {...props} />
                <FilesPanel data={data} {...props} />
              </>
            );
          }}
        />
      </Router>
    </div>
  );
};

export default MainPanel;
