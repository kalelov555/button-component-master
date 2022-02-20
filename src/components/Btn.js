import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Button from "@mui/material/Button";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

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
