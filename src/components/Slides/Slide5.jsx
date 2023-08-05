import React from "react";
import { useNavigate } from "react-router-dom";
import { forth_page, sixth_page } from "../routing/Routes";
import { Grid } from "@mui/material";
import MainText from "../Elements/MainText";
import LineIcon from "../Elements/LineIcon";
import TitleText from "../Elements/TitleText";
import PageNumber from "../Elements/PageNumber";
import TextContent from "../Elements/TextContent";
import ImageBox from "../Elements/ImageBox";

const tableImageURL =
  "https://images.unsplash.com/photo-1507878866276-a947ef722fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80";
const abstractImageURL =
  "https://images.squarespace-cdn.com/content/v1/5bcf1247a09a7e286604e915/1581440670088-T0ZKJ2REU4XS4WLVQCZT/1.jpg?format=1500w";

function Slide5() {
  const navigate = useNavigate();

  const handleArrowKeyPress = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        navigate(sixth_page);
      } else if (event.keyCode === 37) {
        navigate(forth_page);
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
      <Grid item xs={6} marginTop="12vh">
        <TitleText />
        <MainText color="#1C1F25" align="left" width="500px" />
        <TextContent />
      </Grid>
      <Grid item xs={4} marginTop="-80px">
        <ImageBox height="50vh" maxWidth="500px" url={tableImageURL} />
        <ImageBox height="50vh" maxWidth="500px" url={abstractImageURL} />
      </Grid>
      <Grid item xs={1} textAlign="center" marginTop="14vh">
        <PageNumber number="05" />
      </Grid>
    </Grid>
  );
}

export default Slide5;
