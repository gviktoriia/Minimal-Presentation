import { Box, Typography } from "@mui/material";
import React from "react";

function DesignSection(props) {
  return (
    <Box textAlign={props.align}>
      <Typography
        sx={{
          color: "#1C1F25",
          fontFamily: "Quicksand",
          fontWeight: "700",
          fontSize: "30px",
        }}
      >
        Design {props.num}
      </Typography>
      <Typography
        sx={{
          color: "#6A6E77",
          fontFamily: "Quicksand",
          fontWeight: "400",
          fontSize: "25px",
          paddingTop: "30px",
        }}
      >
        Rapidiously harness mission process and backward communities.
      </Typography>
    </Box>
  );
}

export default DesignSection;
