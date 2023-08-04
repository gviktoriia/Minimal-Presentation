import { Box, Grid, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";
import { second_page } from "./routing/Routes";
import { useNavigate } from "react-router-dom";

const imageURL =
  "https://images.unsplash.com/photo-1497170675097-81fc06e915da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80";

function Slide1() {
  const navigate = useNavigate();

  const handleArrowKeyPress = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        navigate(second_page);
        console.log("Pressed");
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
      marginTop="10vh"
    >
      <Grid item height="50px" xs={1} textAlign="center">
        <RemoveIcon
          sx={{
            rotate: "90deg",
            fontSize: "50px",
            color: "#1C1F25",
          }}
        />
      </Grid>
      <Grid item xs={10}>
        <Box
          height="600px"
          maxWidth="1440px"
          sx={{
            backgroundImage: `url(${imageURL})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "rgb(28, 31, 37, 0.6)",
            backgroundBlendMode: "multiply",
          }}
        >
          <Typography
            sx={{
              color: "#E3E6EC",
              fontFamily: "Quicksand",
              fontSize: "25px",
              fontWeight: "400",
              paddingLeft: "240px",
              paddingTop: "136px",
            }}
          >
            Multipurpose Minimal Solution
          </Typography>
          <Typography
            sx={{
              color: "#FFFFFF",
              fontFamily: "Quicksand",
              fontSize: "60px",
              fontWeight: "700",
              maxWidth: "467px",
              textAlign: "left",
              paddingLeft: "240px",
            }}
          >
            The simplest things are often the truest…
          </Typography>
        </Box>
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
          01
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Slide1;
