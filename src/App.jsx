import React from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Right from "./components/Right";

const App = () => {
  return (
    <div className="font-plus flex bg-[#FAFAFA]">
      <Sidebar />
      <Main />
      <Right />
    </div>
  );
};

export default App;
