import React from "react";
import "../css/ButtonsDiv.css";
import Btn from "./Btn"; 
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";


export default function ButtonsDiv() {
    return (
      <div className="buttons-container">
        <h1>Buttons</h1>
        <Btn />
        <Btn hover focus />
<br></br>
        <Btn variant="outlined" color="warning"/>
        <Btn variant="outlined" color="primary" hover focus/>
<br></br>
        <Btn variant="contained"/>
        <Btn variant="text" hover focus/>
<br></br>
        <Btn disabled size="medium"/>
        <Btn startIcon={<LocalGroceryStoreIcon />} />
<br></br>
        <Btn endIcon={<LocalGroceryStoreIcon />}/>
      </div>
    );
}