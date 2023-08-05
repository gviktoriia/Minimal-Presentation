import { Typography } from "@mui/material";
import React from "react";

function TitleText(props) {
  return (
    <Typography
      sx={{
        color: "#E3E6EC",
        fontFamily: "Quicksand",
        fontSize: "25px",
        fontWeight: "400",
        paddingTop: props.top,
        paddingLeft: props.left,
      }}
    >
      Multipurpose Minimal Solution
    </Typography>
  );
}

export default TitleText;
