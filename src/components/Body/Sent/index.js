import { Divider } from "@mui/material";
import React from "react";
import { SentBlock } from "../../../Styled/Styles/Div.styled";
import Toolbox from "../../Reusable/Toolbar";

const index = () => {
  return (
    <SentBlock>
      <Toolbox />
      <Divider sx={{ backgroundColor: "#f1f3f4", opacity: ".5" }} />
      <center>
        <h1 style={{ fontFamily: "var(--popp" }}>Coming Soon........</h1>
      </center>
      <img
        src="https://lh3.googleusercontent.com/a-/AFdZuco5eM35yv5U-nAaq0J55HnwR1ERgYnf05yPC8Yt=s96-c"
        alt=""
      />
    </SentBlock>
  );
};

export default index;
