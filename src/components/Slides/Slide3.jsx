import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { forth_page, second_page } from "../routing/Routes";
import TitleText from "../Elements/TitleText";
import MainText from "../Elements/MainText";
import PageNumber from "../Elements/PageNumber";
import ImageBox from "../Elements/ImageBox";
import ProgressBar from "../Elements/ProgressBar";

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
        <ImageBox height="100vh" url={imageURL} />
      </Grid>
      <Grid item xs={6} marginLeft="3%" marginBottom="5vh">
        <TitleText />
        <MainText color="#1C1F25" align="left" maxWidth="500px" />
        <ProgressBar type="Design" percentage="95" top="10vh" />
        <ProgressBar type="Projects" percentage="60" top="6vh" />
      </Grid>
      <Grid item xs={1} textAlign="center">
        <PageNumber number="03" />
      </Grid>
    </Grid>
  );
}

export default Slide3;
