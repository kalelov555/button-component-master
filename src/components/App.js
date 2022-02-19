import React from "react";
import Navbar from "./Navbar";
import ButtonsDiv from "./ButtonsDiv";

const navs = ["Colors", "Typography", "Spaces", "Buttons", "Inputs"];

function App() {
  return (
    <div className="app">
      <Navbar navs={navs}/>
      <ButtonsDiv />
    </div>
  );
}

export default App;
