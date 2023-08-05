import React from "react";
import { useNavigate } from "react-router-dom";
import { fifth_page, seventh_page } from "../routing/Routes";
import { Grid } from "@mui/material";
import MainText from "../Elements/MainText";
import LineIcon from "../Elements/LineIcon";
import TitleText from "../Elements/TitleText";
import PageNumber from "../Elements/PageNumber";
import Advantages from "../Elements/Advantages";

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
        <LineIcon />
      </Grid>
      <Grid item xs={5} marginTop="12vh">
        <TitleText />
        <MainText color="#1C1F25" align="left" width="500px" />
      </Grid>
      <Grid item xs={5} marginTop="20vh">
        <Advantages />
      </Grid>
      <Grid item xs={1} textAlign="center" marginTop="14vh">
        <PageNumber number="06" />
      </Grid>
    </Grid>
  );
}

export default Slide6;
