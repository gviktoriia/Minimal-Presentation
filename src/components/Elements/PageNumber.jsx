import { Typography, useTheme } from "@mui/material";
import React from "react";

function PageNumber(props) {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        fontFamily: "Quicksand",
        fontSize: "60px",
        fontWeight: "700",
        color: "#E3E6EC",
        [theme.breakpoints.down("sm")]: {
          fontSize: '40px',
        },
      }}
    >
      {props.number}
    </Typography>
  );
}

export default PageNumber;
