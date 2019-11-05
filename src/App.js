import React from "react";
import { useSelector } from "react-redux";
import SideBar from "./components/SideBar";
import MainPanel from "./components/MainPanel";

function App() {
  const data = useSelector(state => state);
  console.log(data);
  return (
    <>
      <SideBar data={data} />
      <MainPanel />
    </>
  );
}

export default App;
