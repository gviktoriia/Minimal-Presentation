import { Box, Typography } from "@mui/material";
import React from "react";

function ProjectsNumber(props) {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "Quicksand",
          fontSize: "60px",
          color: "#E3E6EC",
          fontWeight: "700",
        }}
      >
        {props.num}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Quicksand",
          fontSize: "25px",
          color: "#E3E6EC",
          fontWeight: "400",
        }}
      >
        Business Projects
      </Typography>
    </Box>
  );
}

export default ProjectsNumber;
