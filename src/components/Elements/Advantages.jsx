import React from "react";
import AdvantageBox from "./AdvantageBox";
import { Grid } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import WbIncandescentOutlinedIcon from "@mui/icons-material/WbIncandescentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

function Advantages() {
  return (
    <Grid container direction="row" spacing={3}>
      <Grid item>
        <AdvantageBox
          title="Connection"
          icon={<LinkIcon sx={{ width: "60px", height: "60px" }} />}
        />
      </Grid>
      <Grid item>
        <AdvantageBox
          title="Creativity"
          icon={
            <WbIncandescentOutlinedIcon
              sx={{ width: "60px", height: "60px" }}
            />
          }
        />
      </Grid>
      <Grid item>
        <AdvantageBox
          title="Support Center"
          icon={<SendOutlinedIcon sx={{ width: "60px", height: "60px" }} />}
        />
      </Grid>
    </Grid>
  );
}

export default Advantages;
