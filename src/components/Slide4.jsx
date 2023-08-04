import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import { fifth_page, third_page } from "./routing/Routes";
import { Grid, Typography } from "@mui/material";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";

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
        <RemoveIcon
          sx={{
            rotate: "90deg",
            fontSize: "50px",
            color: "#1C1F25",
          }}
        />
      </Grid>
      <Grid item xs={10}>
        <Typography
          sx={{
            color: "#6A6E77",
            fontFamily: "Quicksand",
            fontSize: "25px",
            fontWeight: "400",
            marginTop: "15%",
          }}
        >
          Multipurpose Minimal Solution
        </Typography>
        <Typography
          sx={{
            color: "#1C1F25",
            fontFamily: "Quicksand",
            fontSize: "60px",
            fontWeight: "700",
            width: "910px",
            textAlign: "left",
            lineHeight: "normal",
          }}
        >
          Make things as simple possible but no simpler
        </Typography>
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
            <Typography
              sx={{
                color: "#6A6E77",
                fontFamily: "Quicksand",
                fontSize: "25px",
                fontWeight: "400",
                maxWidth: "530px",
                textAlign: "left",
              }}
            >
              Completely reintermediate extensible infomediaries whereas
              vortals.
            </Typography>
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
            <Typography
              sx={{
                color: "#6A6E77",
                fontFamily: "Quicksand",
                fontSize: "25px",
                fontWeight: "400",
                maxWidth: "530px",
                textAlign: "left",
              }}
            >
              Completely reintermediate extensible infomediaries whereas
              vortals.
            </Typography>
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
            <Typography
              sx={{
                color: "#6A6E77",
                fontFamily: "Quicksand",
                fontSize: "25px",
                fontWeight: "400",
                maxWidth: "530px",
                textAlign: "left",
              }}
            >
              Completely reintermediate extensible infomediaries whereas
              vortals.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} textAlign="center" marginTop="15vh">
        <Typography
          sx={{
            fontFamily: "Quicksand",
            fontSize: "60px",
            fontWeight: "700",
            color: "#E3E6EC",
          }}
        >
          04
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Slide4;
