import React from "react";
import { useNavigate } from "react-router-dom";
import { eleventh_page, nineth_page } from "../routing/Routes";
import { Grid } from "@mui/material";
import LineIcon from "../Elements/LineIcon";
import PageNumber from "../Elements/PageNumber";
import Section from "../Elements/Section";

const sectionData = [
  {
    number: "01",
    image:
      "https://images.unsplash.com/photo-1454782767667-13a17aac30c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
    width: "100%",
    height: "54vh",
    x: "-200px",
  },
  {
    number: "02",
    image:
      "https://images.unsplash.com/photo-1569412148958-600837f89a65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    width: "100%",
    height: "54vh",
  },
  {
    number: "03",
    image:
      "https://images.unsplash.com/photo-1588075745906-1cc779c8f84e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    width: "100%",
    height: "54vh",
  },
];

function Slide10() {
  const navigate = useNavigate();

  const handleArrowKeyPress = (event) => {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode === 39) {
        navigate(eleventh_page);
      } else if (event.keyCode === 37) {
        navigate(nineth_page);
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
      <Grid item xs={1} height="50px" textAlign="center" marginTop="14vh">
        <LineIcon />
      </Grid>
      <Grid item xs={10}>
        <Grid container>
          {sectionData.map((section, index) => (
            <Grid key={index} item xs={4}>
              <Section {...section} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={1} textAlign="center" marginTop="14vh">
        <PageNumber number="10" />
      </Grid>
    </Grid>
  );
}

export default Slide10;
