/* eslint-disable no-restricted-globals */
import React from "react";
import { useSelector } from "react-redux";
import SideBar from "./components/SideBar";
import MainPanel from "./components/MainPanel";

function App() {
  const data = useSelector((state) => state);

  return (
    <>
      <SideBar data={data.explorer} />
      <MainPanel data={data} />
    </>
  );
}

export default App;
