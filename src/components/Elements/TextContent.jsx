import { Typography, useTheme } from "@mui/material";
import React from "react";

function TextContent() {
  const theme = useTheme();
  return (
    <Typography
      sx={{
        fontFamily: "Quicksand",
        fontSize: "25px",
        fontWeight: "400",
        color: "#6A6E77",
        maxWidth: "549px",
        lineHeight: "45px",
        paddingTop: "6vh",
        [theme.breakpoints.down("sm")]: {
          fontSize: "20px",
        },
      }}
    >
      Dramatically maximize principle-centered models through focused materials.
      Assertively build fully researched best practices via go forward "outside
      the box" thinking.
    </Typography>
  );
}

export default TextContent;
