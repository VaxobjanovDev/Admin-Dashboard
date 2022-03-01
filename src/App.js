import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Clock from "./components/sidebar/asdsa";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
      {/* <Clock/> */}
    </>
  );
};

export default App;
