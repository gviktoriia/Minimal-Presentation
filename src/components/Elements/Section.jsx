import { Grid } from "@mui/material";
import React from "react";
import ImageBox from "./ImageBox";
import DesignSection from "./DesignSection";

function Section(props) {
  return (
    <Grid container direction="column">
      <Grid item xs={6}>
        <ImageBox width={props.width} height={props.height} url={props.image} />
      </Grid>
      <Grid item xs={6} paddingTop="5vh">
        <DesignSection num={props.number} align="left" />
      </Grid>
    </Grid>
  );
}

export default Section;
