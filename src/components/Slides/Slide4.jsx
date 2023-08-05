import React from "react";
import MainText from "../Elements/MainText";
import { useNavigate } from "react-router-dom";
import { fifth_page, third_page } from "../routing/Routes";
import { Grid, Typography } from "@mui/material";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LineIcon from "../Elements/LineIcon";
import TitleText from "../Elements/TitleText";
import PageNumber from "../Elements/PageNumber";
import TextSection from "../Elements/TextSection";

function Slide4() {
  const navigate = useNavigate();

  const handleArrowKeyPress = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        navigate(fifth_page);
      } else if (event.keyCode === 37) {
        navigate(third_page);
      }
    });
  };

  return (
    <Grid
      onKeyPress={handleArrowKeyPress()}
      container
      direction="row"
      alignItems="center"
      spacing={1}
    >
      <Grid item height="50px" xs={1} textAlign="center" marginTop="15vh">
        <LineIcon />
      </Grid>
      <Grid item xs={10}>
        <TitleText top="15vh" />
        <MainText color="#1C1F25" align="left" width="900px" />
        <Grid container direction="row" spacing={2} marginTop="130px">
          <Grid item xs={4}>
            <CloudQueueIcon />
            <Typography
              sx={{
                color: "#1C1F25",
                fontFamily: "Quicksand",
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "left",
              }}
            >
              Cloud System
            </Typography>
            <TextSection />
          </Grid>
          <Grid item xs={4}>
            <FingerprintIcon />
            <Typography
              sx={{
                color: "#1C1F25",
                fontFamily: "Quicksand",
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "left",
              }}
            >
              Security
            </Typography>
            <TextSection />
          </Grid>
          <Grid item xs={4}>
            <DashboardCustomizeIcon />
            <Typography
              sx={{
                color: "#1C1F25",
                fontFamily: "Quicksand",
                fontSize: "30px",
                fontWeight: "700",
                textAlign: "left",
              }}
            >
              Easy to Customize
            </Typography>
            <TextSection />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} textAlign="center" marginTop="15vh">
        <PageNumber number="04" />
      </Grid>
    </Grid>
  );
}

export default Slide4;
