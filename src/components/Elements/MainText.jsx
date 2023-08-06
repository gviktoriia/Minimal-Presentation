import { Typography } from "@mui/material";
import React from "react";

function MainText(props) {
  return (
    <Typography
      sx={(theme) => ({
        color: props.color,
        fontFamily: "Quicksand",
        fontSize: { sm: theme.typography.pxToRem(40), md: "60px" },
        fontWeight: "700",
        maxWidth: { sm: "300px", md: props.maxWidth },
        textAlign: props.align,
        lineHeight: "normal",
      })}
    >
      The simplest things are often the truest…
    </Typography>
  );
}

export default MainText;
