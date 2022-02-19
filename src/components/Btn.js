import ReactDOM from "react-dom";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Btn(props) {
  // React states for hover
  const [hover, setHover] = useState(false);
  const [styleHover, setStyleHover] = useState({ margin: "50px" });

  console.log(styleHover);


  function handleMouseEnter() {
    if (props.hover && props.focus && hover === false) {
      console.log("mouse enter");
      setHover(true);
      setStyleHover({ backgroundColor: "#AEAEAE", margin: "50px" });
    }
  }

  function handleMouseLeave() {
    if (props.hover && props.focus && hover === true) {
      console.log("Mouse leave");
      setHover(false);
      setStyleHover({ margin: "50px" });
    }
  }

  return (
    <Button
      style={styleHover}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      Default
    </Button>
  );
}
