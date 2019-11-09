/* eslint-disable no-restricted-globals */
import React from "react";
import { useSelector } from "react-redux";
import SideBar from "./components/SideBar";
import MainPanel from "./components/MainPanel";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const data = useSelector((state) => state);
  return (
    <ErrorBoundary>
      <SideBar data={data.explorer} />
      <MainPanel data={data} />
    </ErrorBoundary>
  );
}

export default App;
