import React from "react";
import { useNavigate } from "react-router-dom";
import { fifth_page, seventh_page } from "./routing/Routes";
import { Grid, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import LinkIcon from "@mui/icons-material/Link";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Slide6() {
  const navigate = useNavigate();

  const handleArrowKeyPress = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        navigate(seventh_page);
      } else if (event.keyCode === 37) {
        navigate(fifth_page);
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
      <Grid item height="50px" xs={1} textAlign="center" marginTop="14vh">
        <RemoveIcon
          sx={{
            rotate: "90deg",
            fontSize: "50px",
            color: "#1C1F25",
          }}
        />
      </Grid>
      <Grid item xs={5} marginTop="12vh">
        <Typography
          sx={{
            color: "#6A6E77",
            fontFamily: "Quicksand",
            fontSize: "25px",
            fontWeight: "400",
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
            width: "504px",
            textAlign: "left",
            lineHeight: "normal",
          }}
        >
          The simplest things are often the truest…
        </Typography>
      </Grid>
      <Grid item xs={5} marginTop="20vh">
        <Grid container direction="row" spacing={3}>
          <Grid item>
            <Grid container direction="row">
              <Grid item xs={2} paddingTop="50px">
                <LinkIcon sx={{ width: "60px", height: "60px" }} />
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
                  Connection
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
                  Rapidiously harness mission process improvements and
                  backward-compatible communities.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid item xs={2} paddingTop="50px">
                <WbIncandescentOutlinedIcon
                  sx={{ width: "60px", height: "60px", rotate: "180deg" }}
                />
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
                  Creativity
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
                  Rapidiously harness mission process improvements and
                  backward-compatible communities.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Grid item xs={2} paddingTop="50px">
                <SendOutlinedIcon
                  sx={{ width: "60px", height: "60px", rotate: "-20deg" }}
                />
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
                  Support Center
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
                  Rapidiously harness mission process improvements and
                  backward-compatible communities.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} textAlign="center" marginTop="14vh">
        <Typography
          sx={{
            fontFamily: "Quicksand",
            fontSize: "60px",
            fontWeight: "700",
            color: "#E3E6EC",
          }}
        >
          06
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Slide6;
