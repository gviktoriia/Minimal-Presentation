import { Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";

function ProgressBar(props) {
  return (
    <Grid container direction="column" marginTop={props.top}>
      <Grid container direction="row">
        <Grid item xs={11}>
          <Typography
            sx={{
              fontFamily: "Quicksand",
              fontSize: "25px",
              fontWeight: "400",
            }}
          >
            {props.type}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontFamily: "Quicksand",
              fontSize: "25px",
              fontWeight: "700",
            }}
          >
            {props.percentage}%
          </Typography>
        </Grid>
      </Grid>
      <LinearProgress
        variant="determinate"
        value={props.percentage}
        sx={{
          backgroundColor: "rgb(28, 31, 37, 0.1)",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#1C1F25",
          },
        }}
      />
    </Grid>
  );
}

export default ProgressBar;
