import { Grid, Typography } from "@mui/material";
import React from "react";
import SmallTextSection from "./SmallTextSection";

function AdvantageBox(props) {
  return (
    <Grid container direction="row">
      <Grid item xs={2} paddingTop="50px">
        {props.icon}
      </Grid>
      <Grid item xs={10}>
        <Typography
          sx={{
            color: "#1C1F25",
            fontFamily: "Quicksand",
            fontSize: "30px",
            fontWeight: "700",
            textAlign: "left",
          }}
        >
          {props.title}
        </Typography>
        <SmallTextSection />
      </Grid>
    </Grid>
  );
}

export default AdvantageBox;
