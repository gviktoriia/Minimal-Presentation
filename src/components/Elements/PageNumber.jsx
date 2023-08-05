import { Typography } from "@mui/material";
import React from "react";

function PageNumber(props) {
  return (
    <Typography
      sx={{
        fontFamily: "Quicksand",
        fontSize: "60px",
        fontWeight: "700",
        color: "#E3E6EC",
      }}
    >
      {props.number}
    </Typography>
  );
}

export default PageNumber;
