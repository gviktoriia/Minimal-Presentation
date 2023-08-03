import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { first_page, third_page } from "./routing/Routes";
import { useNavigate } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";

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
            fontWeight: "400px",
          }}
        >
          Multipurpose Minimal Solution
        </Typography>
        <Typography
          sx={{
            color: "#1C1F25",
            fontFamily: "Quicksand",
            fontSize: "60px",
            fontWeight: "700px",
            width: "464px",
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
            fontWeight: "400px",
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
          height="620px"
          maxWidth="500px"
          sx={{
            backgroundImage: `url(${imageURL})`,
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
            fontWeight: "bold",
            color: "#E3E6EC",
          }}
        >
          02
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Slide2;
