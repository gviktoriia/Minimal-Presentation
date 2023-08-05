import { Typography } from "@mui/material";
import React from "react";

function MainText(props) {
  return (
    <Typography
      sx={{
        color: props.color,
        fontFamily: "Quicksand",
        fontSize: "60px",
        fontWeight: "700",
        width: props.width,
        textAlign: props.align,
        paddingLeft: props.left,
        lineHeight: "normal",
      }}
    >
      The simplest things are often the truest…
    </Typography>
  );
}

export default MainText;
