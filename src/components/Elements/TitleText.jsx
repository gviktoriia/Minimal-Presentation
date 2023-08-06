import { Typography, useTheme } from "@mui/material";
import React from "react";

function TitleText(props) {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        color: "#E3E6EC",
        fontFamily: "Quicksand",
        fontSize: theme.typography.pxToRem(25),
        fontWeight: 400,
        textAlign: props.align,
        paddingTop: theme.spacing(props.top),
        paddingLeft: props.left,
        [theme.breakpoints.down("sm")]: {
          fontSize: theme.typography.pxToRem(20),
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: theme.typography.pxToRem(14),
        },
      }}
    >
      Multipurpose Minimal Solution
    </Typography>
  );
}

export default TitleText;
