import React from "react";
import { useNavigate } from "react-router-dom";
import { tenth_page, twelfth_page } from "../routing/Routes";
import { Box, Grid } from "@mui/material";
import PageNumber from "../Elements/PageNumber";
import LineIcon from "../Elements/LineIcon";
import ProjectSection from "../Elements/ProjectSection";
import ImageBox from "../Elements/ImageBox";

function Slide11() {
  const navigate = useNavigate();

  const handleArrowKeyPress = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        navigate(twelfth_page);
      } else if (event.keyCode === 37) {
        navigate(tenth_page);
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
      <Grid item>
        <Box
          position="absolute"
          sx={{
            top: "0",
            backgroundColor: "#C4C4C4",
            zIndex: -1,
            width: "500px",
            height: "100vh",
            opacity: "30%",
          }}
        ></Box>
      </Grid>
      <Grid item xs={1} height="50px" textAlign="center" marginTop="14vh">
        <LineIcon />
      </Grid>
      <Grid item xs={4} justifyContent="center" marginTop="10vh">
        <ImageBox
          width="100%"
          height="50vh"
          url="https://images.unsplash.com/photo-1497035111255-8bc8464dc267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          x="-100px"
        />
      </Grid>
      <Grid item xs={4} marginTop="8vh" marginLeft="8%">
        {[1, 2, 3].map((i) => (
          <Grid item marginTop="6vh">
            <ProjectSection key={i} num={`0${i}`} align="left" />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={1} textAlign="center" marginTop="14vh">
        <PageNumber number="11" />
      </Grid>
    </Grid>
  );
}

export default Slide11;
