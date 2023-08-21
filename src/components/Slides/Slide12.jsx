import React from "react";
import { useNavigate } from "react-router-dom";
import { eleventh_page } from "../routing/Routes";
import { Box, Grid } from "@mui/material";
import PageNumber from "../Elements/PageNumber";
import LineIcon from "../Elements/LineIcon";
import ProjectsNumber from "../Elements/ProjectsNumber";

const imageURL =
  "https://images.unsplash.com/photo-1499428665502-503f6c608263?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
const projectData = [80, 55, 95];

function Slide12() {
  const navigate = useNavigate();

  const handleArrowKeyPress = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        navigate(eleventh_page);
      }
    });
  };

  return (
    <Grid
      onKeyPress={handleArrowKeyPress()}
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={1}
    >
      <Grid item xs={1} textAlign="center">
        <LineIcon />
      </Grid>
      <Grid item xs={10}>
        <Box
          height="60vh"
          width="100%"
          marginTop="16vh"
          sx={{
            backgroundImage: `url(${imageURL})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundColor: "rgb(28, 31, 37, 0.5)",
            backgroundBlendMode: "multiply",
          }}
        >
          <Grid container direction="row">
            {projectData.map((number, index) => (
              <Grid key={index} item xs={4} textAlign="center" marginTop="22vh">
                <ProjectsNumber num={number} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={1} textAlign="center" >
        <PageNumber number="12" />
      </Grid>
    </Grid>
  );
}

export default Slide12;
