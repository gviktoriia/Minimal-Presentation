import React from "react";
import { useNavigate } from "react-router-dom";
import { eighth_page, tenth_page } from "../routing/Routes";
import { Box, Grid, Typography } from "@mui/material";
import LineIcon from "../Elements/LineIcon";
import PageNumber from "../Elements/PageNumber";
import ImageBox from "../Elements/ImageBox";
import DesignSection from "../Elements/DesignSection";

function Slide9() {
  const navigate = useNavigate();

  const handleArrowKeyPress = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        navigate(tenth_page);
      } else if (event.keyCode === 37) {
        navigate(eighth_page);
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
      <Grid item xs={1} height="50px" textAlign="center" marginTop="14vh">
        <LineIcon />
      </Grid>
      <Grid item xs={4} height="100vh">
        <Grid container direction="column">
          <Grid item xs={6}>
            <ImageBox
              height="50vh"
              width="100%"
              y={-150}
              url="https://images.unsplash.com/photo-1470137237906-d8a4f71e1966?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            />
          </Grid>
          <Grid item xs={6} paddingTop="15vh">
            <DesignSection num="02" align="left" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Grid container direction="column">
          <Grid item xs={6} marginBottom="16vh" marginTop="15.7vh">
            <DesignSection num="01" align="right" />
          </Grid>
          <Grid item xs={6}>
            <ImageBox
              height="50vh"
              width="100%"
              y={-150}
              url="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=396&q=80"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Box
          sx={{
            rotate: "-90deg",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Quicksand",
              fontSize: "60px",
              fonWeight: "700",
              color: "#1C1F25",
              width: "400px",
            }}
          >
            Main Projects
          </Typography>
          <Typography
            sx={{
              fontFamily: "Quicksand",
              fontWeight: "400",
              fontSize: "25px",
              color: "#6A6E77",
            }}
          >
            Minimal Solution
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={1} textAlign="center" marginTop="14vh">
        <PageNumber number="09" />
      </Grid>
    </Grid>
  );
}

export default Slide9;
