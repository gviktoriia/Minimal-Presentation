import { Box, Typography } from "@mui/material";
import React from "react";

function DesignsNumber(props) {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Quicksand",
          fontSize: "60px",
          color: "#1C1F25",
          fontWeight: "700",
        }}
      >
        {props.num}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Quicksand",
          fontSize: "25px",
          color: "#6A6E77",
          fontWeight: "400",
        }}
      >
        {props.work}
      </Typography>
    </Box>
  );
}

export default DesignsNumber;
