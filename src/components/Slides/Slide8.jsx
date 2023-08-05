import React from "react";
import { Grid } from "@mui/material";
import LineIcon from "../Elements/LineIcon";
import { useNavigate } from "react-router-dom";
import { nineth_page, seventh_page } from "../routing/Routes";
import ImageBox from "../Elements/ImageBox";
import PageNumber from "../Elements/PageNumber";
import TitleText from "../Elements/TitleText";
import MainText from "../Elements/MainText";
import DesignsNumber from "../Elements/DesignsNumber";

function Slide8() {
  const navigate = useNavigate();

  const handleArrowKeyPress = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        navigate(nineth_page);
      } else if (event.keyCode === 37) {
        navigate(seventh_page);
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
      <Grid item height="50px" xs={1} textAlign="center">
        <LineIcon />
      </Grid>
      <Grid item xs={4} marginRight="6%">
        <ImageBox
          width="600px"
          height="100vh"
          url="https://images.unsplash.com/photo-1567226028173-20eb319d0bac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        />
      </Grid>
      <Grid item xs={5}>
        <TitleText />
        <MainText />
        <Grid container direction="row" columnSpacing={10} marginTop="12vh">
          <Grid item>
            <DesignsNumber num="80" work="Design Sprint" />
          </Grid>
          <Grid item>
            <DesignsNumber num="75" work="Figma Themes" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1}>
        <PageNumber number="08" />
      </Grid>
    </Grid>
  );
}

export default Slide8;
