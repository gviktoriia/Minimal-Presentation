import React from "react";
import { useNavigate } from "react-router-dom";
import { forth_page, sixth_page } from "./routing/Routes";
import { Box, Grid, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

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
        <RemoveIcon
          sx={{
            rotate: "90deg",
            fontSize: "50px",
            color: "#1C1F25",
          }}
        />
      </Grid>
      <Grid item xs={6} marginTop="12vh">
        <Typography
          sx={{
            color: "#6A6E77",
            fontFamily: "Quicksand",
            fontSize: "25px",
            fontWeight: "400",
          }}
        >
          Multipurpose Minimal Solution
        </Typography>
        <Typography
          sx={{
            color: "#1C1F25",
            fontFamily: "Quicksand",
            fontSize: "60px",
            fontWeight: "700",
            width: "504px",
            textAlign: "left",
            lineHeight: "normal",
          }}
        >
          The simplest things are often the truest…
        </Typography>
        <Typography
          sx={{
            fontFamily: "Quicksand",
            fontSize: "25px",
            fontWeight: "400",
            color: "#6A6E77",
            maxWidth: "549px",
            lineHeight: "45px",
            paddingTop: "6vh",
          }}
        >
          Dramatically maximize principle-centered models through focused
          materials. Assertively build fully researched best practices via go
          forward "outside the box" thinking.
        </Typography>
      </Grid>
      <Grid item xs={4} marginTop="-80px">
        <Box
          height="50vh"
          maxWidth="500px"
          sx={{
            backgroundImage: `url(${tableImageURL})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Box>
        <Box
          height="50vh"
          maxWidth="500px"
          sx={{
            backgroundImage: `url(${abstractImageURL})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Box>
      </Grid>
      <Grid item xs={1} textAlign="center" marginTop="14vh">
        <Typography
          sx={{
            fontFamily: "Quicksand",
            fontSize: "60px",
            fontWeight: "700",
            color: "#E3E6EC",
          }}
        >
          05
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Slide5;
