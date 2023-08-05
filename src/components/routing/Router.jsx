import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  eighth_page,
  eleventh_page,
  fifth_page,
  first_page,
  forth_page,
  nineth_page,
  second_page,
  seventh_page,
  sixth_page,
  tenth_page,
  third_page,
  twelfth_page,
} from "./Routes";
import Slide1 from "../Slides/Slide1";
import Slide2 from "../Slides/Slide2";
import Slide3 from "../Slides/Slide3";
import Slide4 from "../Slides/Slide4";
import Slide5 from "../Slides/Slide5";
import Slide6 from "../Slides/Slide6";
import Slide7 from "../Slides/Slide7";
import Slide8 from "../Slides/Slide8";
import Slide9 from "../Slides/Slide9";
import Slide10 from "../Slides/Slide10";
import Slide11 from "../Slides/Slide11";
import Slide12 from "../Slides/Slide12";

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
        <Route path={seventh_page} element={<Slide7 />}></Route>
        <Route path={eighth_page} element={<Slide8 />}></Route>
        <Route path={nineth_page} element={<Slide9 />}></Route>
        <Route path={tenth_page} element={<Slide10 />}></Route>
        <Route path={eleventh_page} element={<Slide11 />}></Route>
        <Route path={twelfth_page} element={<Slide12 />}></Route>
      </Routes>
    </Box>
  );
}

export default Router;
