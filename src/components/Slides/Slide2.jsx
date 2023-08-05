import { Grid } from "@mui/material";
import React from "react";
import { first_page, third_page } from "../routing/Routes";
import { useNavigate } from "react-router-dom";
import MainText from "../Elements/MainText";
import LineIcon from "../Elements/LineIcon";
import TitleText from "../Elements/TitleText";
import PageNumber from "../Elements/PageNumber";
import TextContent from "../Elements/TextContent";
import ImageBox from "../Elements/ImageBox";

const imageURL =
  "https://images.unsplash.com/photo-1594864978403-131542bc6e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";

function Slide2() {
  const navigate = useNavigate();

  const handleArrowKeyPress = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        navigate(third_page);
      } else if (event.keyCode === 37) {
        navigate(first_page);
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
        <ImageBox height="620px" maxWidth="500px" url={imageURL} />
      </Grid>
      <Grid item xs={1} textAlign="center" marginTop="14vh">
        <PageNumber number="02" />
      </Grid>
    </Grid>
  );
}

export default Slide2;
