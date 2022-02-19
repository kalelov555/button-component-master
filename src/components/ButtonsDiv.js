import React from "react";
import "../css/ButtonsDiv.css";
import Btn from "./Btn";


export default function ButtonsDiv() {
    return (
      <div className="buttons-container">
        <h1>Buttons</h1>
        <Btn />
        <Btn hover focus />
<br></br>
        <Btn variant="outline-primary" />
        <Btn variant="outline-primary" hover focus/>
<br></br>
        <Btn variant="text"/>
        <Btn variant="text" hover focus/>
<br></br>
        <Btn disableShadow/>
      </div>
    );
}