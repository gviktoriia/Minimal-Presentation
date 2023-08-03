import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { first_page, second_page } from "./Routes";
import Slide1 from "../Slide1";
import Slide2 from "../Slide2";

function Router() {
  return (
    <Box>
      <Routes>
        <Route path={first_page} element={<Slide1 />}></Route>
        <Route path={second_page} element={<Slide2 />}></Route>
      </Routes>
    </Box>
  );
}

export default Router;
