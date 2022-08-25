import { Divider } from "@mui/material";
import React from "react";
import { UpdatesBlock } from "../../../Styled/Styles/Div.styled";
import Toolbox from "../../Reusable/Toolbar";

const index = () => {
  return (
    <UpdatesBlock>
      <Toolbox />
      <Divider sx={{ backgroundColor: "#f1f3f4", opacity: ".5" }} />
      <center>
        <h1 style={{ fontFamily: "var(--popp" }}>Coming Soon........</h1>
      </center>
    </UpdatesBlock>
  );
};

export default index;
