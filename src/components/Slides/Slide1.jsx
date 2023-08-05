import { Box, Grid } from "@mui/material";
import React from "react";
import { second_page } from "../routing/Routes";
import { useNavigate } from "react-router-dom";
import LineIcon from "../Elements/LineIcon";
import TitleText from "../Elements/TitleText";
import MainText from "../Elements/MainText";
import PageNumber from "../Elements/PageNumber";

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
        <LineIcon />
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
          <TitleText top="16vh" left="240px" />
          <MainText color="#FFFFFF" left="240px" align="left" width="500px" />
        </Box>
      </Grid>
      <Grid item xs={1} textAlign="center">
        <PageNumber number="01" />
      </Grid>
    </Grid>
  );
}

export default Slide1;
