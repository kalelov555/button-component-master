import React from "react";
import "../css/Navigations.css";

export default function Navigations(props) {
    return (
      <div className="navigations-div">
        {props.navs.map((nav, i) => {
            return <p className="nav-name" key={i+1}>{nav}</p>
        })}
      </div>
    );
}