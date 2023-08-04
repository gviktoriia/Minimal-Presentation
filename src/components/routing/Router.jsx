import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  fifth_page,
  first_page,
  forth_page,
  second_page,
  sixth_page,
  third_page,
} from "./Routes";
import Slide1 from "../Slide1";
import Slide2 from "../Slide2";
import Slide3 from "../Slide3";
import Slide4 from "../Slide4";
import Slide5 from "../Slide5";
import Slide6 from "../Slide6";

function Router() {
  return (
    <Box>
      <Routes>
        <Route path={first_page} element={<Slide1 />}></Route>
        <Route path={second_page} element={<Slide2 />}></Route>
        <Route path={third_page} element={<Slide3 />}></Route>
        <Route path={forth_page} element={<Slide4 />}></Route>
        <Route path={fifth_page} element={<Slide5 />}></Route>
        <Route path={sixth_page} element={<Slide6 />}></Route>
      </Routes>
    </Box>
  );
}

export default Router;
