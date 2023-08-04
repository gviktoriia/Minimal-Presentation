import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { forth_page, second_page, third_page } from "./routing/Routes";
import RemoveIcon from "@mui/icons-material/Remove";

const imageURL =
  "https://images.unsplash.com/photo-1588599830253-6ceef61929c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

function Slide3() {
  const navigate = useNavigate();

  const handleArrowKeyPress = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        navigate(forth_page);
      } else if (event.keyCode === 37) {
        navigate(second_page);
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
      <Grid item xs={5} marginLeft="-80px">
        <Box
          height="100vh"
          sx={{
            backgroundImage: `url(${imageURL})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Box>
      </Grid>
      <Grid item xs={6} marginLeft="50px">
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
            width: "480px",
            textAlign: "left",
            lineHeight: "normal",
          }}
        >
          The simplest things are often the truest…
        </Typography>
        <Grid container direction="row" marginTop="80px">
          <Grid item xs={11}>
            <Typography
              sx={{
                fontFamily: "Quicksand",
                fontSize: "25px",
                fontWeight: "400",
              }}
            >
              Design
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
              95%
            </Typography>
          </Grid>
        </Grid>
        <LinearProgress
          variant="determinate"
          value={95}
          sx={{
            backgroundColor: "rgb(28, 31, 37, 0.1)",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#1C1F25",
            },
          }}
        />
        <Grid container direction="row" marginTop="40px">
          <Grid item xs={11}>
            <Typography
              sx={{
                fontFamily: "Quicksand",
                fontSize: "25px",
                fontWeight: "400",
              }}
            >
              Projects
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
              60%
            </Typography>
          </Grid>
        </Grid>
        <LinearProgress
          variant="determinate"
          value={60}
          sx={{
            backgroundColor: "rgb(28, 31, 37, 0.1)",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#1C1F25",
            },
          }}
        />
      </Grid>
      <Grid item xs={1} textAlign="center">
        <Typography
          sx={{
            fontFamily: "Quicksand",
            fontSize: "60px",
            fontWeight: "700",
            color: "#E3E6EC",
          }}
        >
          03
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Slide3;
