import { Box } from "@mui/material";
import React from "react";

function ImageBox(props) {
  return (
    <Box
      height={props.height}
      maxWidth={props.width}
      sx={{
        backgroundImage: `url(${props.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: props.y,
        backgroundPositionX: props.x,
      }}
    ></Box>
  );
}

export default ImageBox;
