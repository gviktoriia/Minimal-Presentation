import { Typography } from "@mui/material";
import React from "react";

function SmallTextSection(props) {
  return (
    <Typography
      sx={{
        color: "#6A6E77",
        fontFamily: "Quicksand",
        fontSize: "25px",
        fontWeight: "400",
        maxWidth: "630px",
        textAlign: "left",
      }}
    >
      Rapidiously harness mission process improvements and backward-compatible
      communities.
    </Typography>
  );
}

export default SmallTextSection;
