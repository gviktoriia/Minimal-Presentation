import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { eighth_page, sixth_page } from "../routing/Routes";
import LineIcon from "../Elements/LineIcon";
import PageNumber from "../Elements/PageNumber";
import ImageBox from "../Elements/ImageBox";
import Advantages from "../Elements/Advantages";

function Slide7() {
  const navigate = useNavigate();

  const handleArrowKeyPress = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        navigate(eighth_page);
      } else if (event.keyCode === 37) {
        navigate(sixth_page);
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
      <Grid item xs={6}>
        <Advantages />
      </Grid>
      <Grid item xs={5}>
        <Grid container direction="row">
          <Grid item xs={12}>
            <ImageBox
              height="100vh"
              width="600px"
              url="https://images.unsplash.com/photo-1593283590172-adfce2adf213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            />
          </Grid>
          <Grid item xs={0} marginLeft="-30%" marginTop="44vh">
            <PageNumber number="07" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Slide7;
